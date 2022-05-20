// ###### Exercícios de interpretação de código

// ******** 1 ********

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  //>>>>>>> A
// vai criar uma nova array com o item, index e array ondividuais um dos usuarios
//>>>>> quando executei pra confirmar vi q ele executou isso pra cada um dos usuarios , n entendi o pq

// ******** 2 ********
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
    
  //>>>>>>> A

  // sera impresso somente os nomes dos usuarios 

  // ******** 3 ********

  
  // const novoArrayC = usuarios.filter((item, index, array) => {
  //    return item.apelido !== "Chijo"
  // })
  
  // console.log(novoArrayC)


  //>>>>>>> A
//vai mostrar os usuarios que não tem o apelido "Chijo"




// ###### Exercícios de escrita de código


// ******** 1 ********

// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]

  //>>>>>>> A
  // const nomeDogs = pets.map((item, index, array) => {
  //    return item.nome
  // })
   //>>>>>>> B
  // console.log(nomeDogs)

  //   const tipoDogs = pets.filter((item, index, array) => {
  //     return item.raca === "Salsicha"
  //  })
   
  //  console.log(tipoDogs)

   //>>>>>>> C
//    const sohOsPodo = pets.filter((pet) =>
//     {return pet.raca === 'Poodle'}).map((dog) =>
//      {return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}`
//     })

// console.log(sohOsPodo)

// ******** 2 ********

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
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]    
 //>>>>>>> A

 
  // const nomeprodutos = produtos.map((item, index, array) => {
  //    return item.nome
  // })
  
  // console.log(nomeprodutos)
    
//>>>>>>> B
// let precoDisconto = []
//   const precoProdutos = produtos.map((item) => {
//  return [item.nome ,parseFloat(item.preco*0.95).toPrecision(3)]
//   })
  
//  console.log(precoProdutos)
    

//>>>>>>> C
// let itensBebibas = produtos.filter ((produto) =>{
//   return produto.categoria === "Bebidas"
// }
// )
// console.log (itensBebibas)

//>>>>>>> D

// let sohYpe = produtos.filter ((produto) =>{
//   return produto.nome.includes("Ypê")
// }
// )
// console.log (sohYpe)

//>>>>>>> E

// let buySohYpe = produtos.filter ((produto) =>{
//   return produto.nome.includes("Ypê") 
// }
// )
// console.log (sohYpe)
{return pet.raca === 'Poodle'}).map((dog) =>
{return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}`
})