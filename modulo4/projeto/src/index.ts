import express,{Express, Request, Response } from "express";
import cors from "cors"
import { accounts } from "./accounts";


const app: Express = express()

app.use(cors())
app.use(express.json())

app.post("/accounts/create", (req:Request,res:Response)=>{
  try {
    //consultar/aterar a base de dados
    const {name,cpf, birthdateString} = req.body
        const [day,month,year] = birthdateString.split("/")
        const birthdate: Date = new Date(`${year}-${month}-${day}`)
        const ageMiliS: number = Date.now() - birthdate.getTime()
        const ageYears: number = ageMiliS /1000 /60 / 60 /24 /365
        if (ageYears <18){
            res.statusCode = 406
            throw new Error ("Age don't match")
        }
    accounts.push({
        name,
        cpf,
        birthdate,
        balance:0,
        statement:[]
    })
    //validar os resultadosda consulta
    //enviar a resposta
    res.status(201).send("create accaunt sussesfully")
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }  
})
app.get("/accounts/all", (req:Request,res:Response)=>{
    try {
        if(!accounts.length) {
            res.statusCode = 404
            throw new Error("Any account founding")
        }
        res.status(200).send(accounts)
    } catch (error) {
        res.send(error)
    }
})
app.listen(3003, () => {
    console.log("Server is running")
})
