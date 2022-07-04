// const pokemons = [
//    {nome: "bulbasaur", tipo: "grama"},
//    {nome: "bellsprout", tipo: "grama"},
//    {nome: "charmander", tipo: "fogo"},
//    {nome: "vulpix", tipo: "fogo"},
//    {nome: "squirtle", tipo: "agua"},
//    {nome: "psyduck", tipo: "agua"},
// ]

    
    //  const retornarPokemonsFogo = () => {
    //      for(let i = 0; i < pokemons.length; i++) {
    //          if(pokemons[i].tipo === 'fogo') {
    //              console.log(pokemons[i].nome) 
    //          }
    //      }
    //  }
    
    //  retornarPokemonsFogo()
    
    // const retornaMelhoresPokemons = pokemons.filter((pokemon, index, array) => {
    //     if(pokemon.tipo === 'grama') {
    //         console.log(pokemon.nome) 
    //     }
         
    // })
    
    //exercicio 3 

    const numeros = [1, 2, 5, 8, 10, 11, 13, 15, 20]

    // const retornaMaioresDe10 = numeros.filter((numero) => {
    //     return numero > 10
    // })

    // console.log(retornaMaioresDe10)

    //retorna apenas os pares

    // const retornaPares = numeros.filter((numero) => {
    //     return numero % 2 === 0
    // })

    // console.log(retornaPares)
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
     ]

    //SEPARADO 
// const produtosDeLimpeza = produtos.filter((produto) => {
//     return produto.categoria === 'Limpeza'
// })

// const nomeDosProdutos = produtosDeLimpeza.map((produto) => {
//     return produto.nome
// })

//JUNTO
// const produtosDeLimpeza = produtos.filter((produto) => {
//     return produto.categoria === 'Limpeza'
// }).map((produto) => {
//     return produto.nome
// })

// console.log(nomeDosProdutos)

// const produtosDeLimpeza = produtos.filter((produto) => {
//     if(produto.categoria === 'Limpeza') {
//         console.log(produto.nome)
//     }
// })

