import express from "express"
import cors from "cors"

export const app = express()
app.use(cors())
app.use(express.json())

type User = {
  id: number,
  name: string,
  phone: number,
  email: string,
  website:string
}
let userList:User[] = [
//   {id:1, name:`The Void`, phone:5511123456789, email:`thevoid@email.com`,website:`www.void.com`},
//   {id:2, name:`The Null`, phone:5511234567890, email:`thenull@email.com`,website:`www.null.com`},
//   {id:3, name:`Tiamat`, phone:5511345678901, email:`tiamat@email.com`,website:`www.tiamat.com`}
]

app.get("/users", (req:express.Request, res:express.Response) => {
  if (!userList.length) res.status(401).send({message:`Nenhum usuário cadastrado`})
  else res.status(200).send({users:userList})
})







app.listen(3003, () => {
    console.log(`Server is running`)})
