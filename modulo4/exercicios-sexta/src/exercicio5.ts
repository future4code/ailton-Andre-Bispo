// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  EXERCICIO 5

type User = {
    name:string,
    email:string,
    role:string
}

const users:User[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"},
    {name: "André", email:"luizindev@email.com",role:"admin"}      
]


function getAdminsE(lista: User[]): string[] {
   const userFilter:string[] = lista.filter((item: User) =>{
    return item.role === "admin"
}).map(item=>{
    return item.email
})
return userFilter
}
console.table(getAdminsE(users))
