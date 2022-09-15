import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const search = req.query.search as string || ""
            const sort = req.query.sort as string || "ASC"
            const limit = Number(req.query.limit) || 10
            const page = Number(req.query.page) || 1
            const offset = limit * (page - 1)

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getRecipes(
                search,
                sort,
                limit,
                offset
            )

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })

            res.status(200).send({ recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public createRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const title = req.body.title
            const description = req.body.description

            const token = req.headers.authorization
            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            if (!title) {
                throw new Error("Parâmetro 'title' faltando")
            }

            if (typeof title !== "string") {
                throw new Error("Parâmetro 'title' deve ser uma string")
            }

            if (title.length < 3) {
                throw new Error("Parâmetro 'title' deve possuir pelo menos 3 caracteres")
            }

            if (!description) {
                throw new Error("Parâmetro 'description' faltando")
            }

            if (typeof description !== "string") {
                throw new Error("Parâmetro 'description' deve ser uma string")
            }

            if (description.length < 10) {
                throw new Error("Parâmetro 'description' deve possuir pelo menos 10 caracteres")
            }

            const idGenerator = new IdGenerator()

            const recipe = new Recipe(
                idGenerator.generate(),
                title,
                description,
                new Date(),
                new Date(),
                payload.id
            )

            const recipeDatabase = new RecipeDatabase()
            await recipeDatabase.createRecipe(recipe)

            res.status(201).send({
                message: "Receita criada com sucesso",
                recipe 
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public editRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const recipeId = req.params.id
            const title = req.body.title
            const description = req.body.description

            const token = req.headers.authorization
            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            if (!title && !description) {
                throw new Error("Parâmetro faltando")
            }

            if (title && typeof title !== "string") {
                throw new Error("Parâmetro 'title' deve ser uma string")
            }

            if (title && title.length < 3) {
                throw new Error("Parâmetro 'title' deve possuir pelo menos 3 caracteres")
            }

            if (description && typeof description !== "string") {
                throw new Error("Parâmetro 'description' deve ser uma string")
            }

            if (description && description.length < 10) {
                throw new Error("Parâmetro 'description' deve possuir pelo menos 10 caracteres")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipeDB = await recipeDatabase.findRecipeById(recipeId)

            if (!recipeDB) {
                errorCode = 404
                throw new Error("Receita a ser editada não existe")
            }

            const recipe = new Recipe(
                recipeDB.id,
                recipeDB.title,
                recipeDB.description,
                recipeDB.created_at,
                recipeDB.updated_at,
                recipeDB.creator_id
            )

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== recipe.getCreatorId()) {
                    errorCode = 403
                    throw new Error("Esta receita não pode ser editada por esse usuário")
                }
            }

            title && recipe.setTitle(title)
            description && recipe.setDescription(description)

            await recipeDatabase.updateRecipe(recipe)

            res.status(200).send({
                message: "Receita editada com sucesso",
                recipe
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public deleteRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const recipeId = req.params.id

            const token = req.headers.authorization
            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipeDB = await recipeDatabase.findRecipeById(recipeId)

            if (!recipeDB) {
                errorCode = 404
                throw new Error("Receita a ser deletada não existe")
            }

            const recipe = new Recipe(
                recipeDB.id,
                recipeDB.title,
                recipeDB.description,
                recipeDB.created_at,
                recipeDB.updated_at,
                recipeDB.creator_id
            )

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== recipe.getCreatorId()) {
                    errorCode = 403
                    throw new Error("Esta receita não pode ser deletada por esse usuário")
                }
            }

            await recipeDatabase.deleteRecipeById(recipe.getId())

            res.status(200).send({
                message: "Receita deletada com sucesso"
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}