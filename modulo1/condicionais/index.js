// ATIVIDADE 1  de interpretação


// const respostaDoUsuario = prompt
// ("Digite o número que você quer testar")
// const numero = number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//EXERCICIO A

//R>> ele pega o valor dado pelo usuario,
//  converte em numero e testa pra saber se é par ou impar
//   e se for par ele retorna como "Passou no teste."

//EXERCICIO B

//R>> numeros divisiveis por 2 ou pares

//EXERCICIO C

//R>> para numeros impares

// ATIVIDADE 2  de interpretação

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//    break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//EXERCICIO A

// para dar os valores/preços da mercadoria/frutas

//EXERCICIO B

//"O preço da fruta ", Maçã , " é ", "R$ ", 3.5

//EXERCICIO C

//ele vai ler o item seguinte direto, que no caso é o default


// ATIVIDADE 3  de interpretação

// const numero = number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


//EXERCICIO A
//faz com q o numero digitado pelo usuario fique como numerico e não escrita


//EXERCICIO B  
//"Esse número passou no teste" ; Erro, vide exercicio c

//EXERCICIO C

// A "mensagen" n pode ser puxada/buscada pois está em escopo local e o console log em global 

// ############################# //

// ATIVIDADE 1

// let idadeUsuario = Number(prompt("Qual a sua idade")) 
// if (idadeUsuario < 18)
//  {console.log("Nada de CNH pra você jovem gafanhoto")}
// else {console.log("Dirigir você já pode, padawan.")}

// ATIVIDADE 2

// const periodo = prompt( `Qual o perido que você estuda? 
// Sendo:  M (matutino), V (Vespertino) ou N (Noturno)`).toLowerCase();

// const resultadoPeriodo = (turno) =>{
//     if (turno === "m") {
//         console.log("Bundia frô do dia")
//     }
//     else if (turno === "v") {
//         console.log("Taarrdee")
//     }
//     else if (turno === "n") {
//         console.log("Boa noite pra quem é de boa noite")
//     }else { console.log(`ERRO
//     Digite somente a letra correspondente ao periodo`)}
// }
// resultadoPeriodo (periodo)

// ATIVIDADE 3


// let turno = prompt( `Qual o perido que você estuda? 
//  Sendo:  M (matutino), V (Vespertino) ou N (Noturno)`).toUpperCase();

// switch(turno){
//     case "M":
//         console.log("Bundia frô do dia")
//         break;
//     case "V":
//         console.log("Taarrde!")
//         break;
//     case "N":
//         console.log("Boa noite pra quem é de boa noite")
//         break;
//     default:
//         console.log(`ERRO
//         Digite somente a letra correspondente ao periodo`)
// }

// ATIVIDADE 4

// let ehDeFantasia = confirm("O filme é de fantasia?")
// let ehBarato = confirm("Vai ser menos de 15 conto?")

// const podeEstudar = (ehDeFantasia, ehBarato) => {
//     if(ehDeFantasia && ehBarato) {
//         return "Vamo!"
//     } else {
//         return "Nem vai dar ein..."
//     }
// }

// console.log(podeEstudar(ehDeFantasia, ehBarato))
