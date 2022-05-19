// ### ATIVIDADE DE INTERPRETAÇÃO
// ATIVIDADE 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// console.log(valor)
// }
// console.log(valor)

//R>>> ele define um "QUANTIA" para "valor" como "0" e "quantia" de "I" para zero tambem; NO SEU INICIO
//  depois vai verificar se "I" é menor q 5; NA SUA CONTINUAÇÂO
//   em seguida no "VALOR" vai adicionar a "quantia" atual  de  "I" ; NA ação da continuação
//    então vai acrecentar no valor de "I" +1  ; na sua finalização
//     e por fim jogar no consolhe quanto deu quando o "I" atingiu 5

/// >>>>> eu precisei da ajuda dos colegas pra entender qual a ordem de execução do loop pois eu perdi partes das exlicações por quedas de energia na minha casa 

// ATIVIDADE 2
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
//  }

//R>>> A>>>>  vai ser impresso um a um os numeros maiores que 18 

//R>>> B>>>>  Não necessariamente, ele é suficente como parte interna do codigo
// mas para apresentra ao usuario (ou acessar) é necessario acrescentar
// "lista.indexOf(numero)" dntro do console.log()

// ATIVIDADE 3

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//R>>> ele colocaroa 4 linha e em cada uma dela uma qunatidade "equivalente" de asterisco pra "mostrar" as linhas

 // ### ATIVIDADE DE ESCRITA

// ATIVIDADE 1

// let quantosPets = Number(prompt ("Quantos bichinhos de estimação você tem?"))
// let listaPets = []

// if (quantosPets === 0 ) { "Que pena! Você pode adotar um pet!"}
// else if (quantosPets !== 0 ) {
//     while (listaPets.length < quantosPets) {
//         listaPets.push (prompt ("Escreva o nome dos seus binhin"))
//     }
// }
// console.log(listaPets)

// ATIVIDADE 2
//>>A

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for ( let valorindice of arrayOriginal) {
   
//  console.log(valorindice)
// }

//>>B


// for ( let valorindice of arrayOriginal) {
   
//     console.log(valorindice/10)
//    }

//>>C

 let arrayPares = []

for ( arrayPares of arrayOriginal % 2) {
    arrayPares.push( console.log(arrayPares))
 }


