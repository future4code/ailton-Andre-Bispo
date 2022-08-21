export type Transaction = {
    value:number,
    date:string,
    description:string
}

export type Account = {
    // id: number,
    name: string,
    cpf: string,
    birthdate: string | any,
    balance: number,
    statement: Array<Transaction[]>
}