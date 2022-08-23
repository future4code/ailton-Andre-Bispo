export type Transaction = {
    value:number,
    date:string,
    description:string
}

export type Account = {
    // id: number,
    name: string,
    cpf: string,
    birthdate: Date ,
    balance: number,
    statement: Array<Transaction[]>
}