// 1. Leia o código abaixo
    
//     ```jsx
//     function minhaFuncao(variavel) {
//     	return variavel * 5
//     }
    
//     console.log(minhaFuncao(2))
//     console.log(minhaFuncao(10))
//     ```
    
//     a) O que vai ser impresso no console?

   // R>> será impresso na tela os valores multiplicados por 5, dando 10 e 50

//     b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    
  //R>> será impresso os mesmos valores da resposta anterior.

// 2. Leia o código abaixo
    
//     ```jsx
    // let textoDoUsuario = prompt("Insira um texto");
    
    // const outraFuncao = function(texto) {
    // 	return texto.toLowerCase().includes("cenoura")
    // }
    
    // const resposta = outraFuncao(textoDoUsuario)
    // console.log(resposta)
   // ```
    
//     a. Explique o que essa função faz e qual é sua utilidade
    
   //R>> ela apos pedir uma frase para o usuario vai  deixar o texto em minusculas e verificar se tem a "palavra-chave" 'cenoura'

//     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//          i.   `Eu gosto de cenoura`
//          ii.  `CENOURA é bom pra vista`
//          iii. `Cenouras crescem na terra`

  //R>> TRUE true true



  // # Atividade de escrita de codigo

// ATIVIDADE 1 >>>> A

// const imprimirmensagem = () => `Eu me chamo André Luiz, tenho 27 anos, moro em São Paulo, sou eletricista`;
  
//     console.log(imprimirmensagem())

 // ATIVADE 1 >>>> B


// const nomeUsuario = prompt("Qual seu nome?")
// const idadeUsuario = prompt("Qual sua idade?")
// const localUsuario = prompt("Onde você mora? (estado/cidade)")
// const profissaoUsuario = prompt("Oque você faz? (profissão)")

// const dadosUsuario = (nome,idade,local,profissao) => {
// console.log(`Me chamo ${nome}, tenho ${idade} anos. Moro em ${local} e sou ${profissao}`)
// }
// dadosUsuario(nomeUsuario,idadeUsuario,localUsuario,profissaoUsuario);


// ATIVIDADE 2 >>>> A


// const soma = (num1, num2) => num1 + num2
// console.log (soma(7,3))

// //2 >>>> B

// const maiorOUigual = (num1, num2) => num1 >= num2
// console.log (maiorOUigual(7,3))

// // 2 >>>> C

// const parImpar = (num1) => num1 % 2 === 0
// console.log (parImpar(7))

// // 2 >>> D
// const formataNome = nome => nome.toLowerCase()+ " " +nome.length 
// console.log(formataNome("ANDRE"))


// ATIVIDADE 3 >>>> 

const soma = (num1, num2) => num1 + num2
const menos = (num1, num2) => num1 - num2
const vezes = (num1, num2) => num1 * num2
const divi = (num1, num2) => num1 / num2

