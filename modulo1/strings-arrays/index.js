

// # ATIVIDADE 1

// let array;
// console.log('a. ', array);

//R >> indefinido

// array = null;
// console.log('b. ', array);

//R >> null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log('c. ', array.length);

// R >> 11

// let i = 0
// console.log('d. ', array[i])

// R >> 3 => eu não tinha entendido que ele dava a infomação de conteudo da "casinha"

// array[i+1] = 19
// console.log('e. ', array)

// R >> [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// ele altera o conteudo da segunda "caixinha" para 19 

// const valor = array[i+6]
// console.log('f. ', valor)

//R >> 9 => ele mostra o conteudo da "casinha numero '6'"

//# ATIVIDADE 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

//R >> "SUBI NUM ÔNIBUS EM MIRROCOS 27" tudo em caixa alta com a troca da letra 'a' para 'i' e com a quantidade de letras.



// # Atividade 


// 1 
let nomeUsuario = prompt ("Digite seu nome");
let emailUsuario = prompt ("Digite seu email");

console.log(
    `O email `, emailUsuario, `foi cadastrado com sucesso.`,
`Seja bem vindo(a),`, nomeUsuario  
    );
// 2
 favFood = ['Pizza','Macarronada', 'Batata','Churrasco','Japonesa'];
console.log(favFood,`Essas são as minhas comidas favoritas,

${favFood[0]}
${favFood[1]}
${favFood[2]}
${favFood[3]}
${favFood[4]}
`);

favFood[1] = prompt('Digite sua comida favorita:');
console.log(favFood);

// 3

const listaDeTarefas = [];

const tarefa0 = prompt('Escreva a primeira tarefa do seu dia');
const tarefa1 = prompt('Escreva a segunda tarefa do seu dia');
const tarefa2 = prompt("Escreva a terceira tarefa do seu dia");


listaDeTarefas[0] = tarefa0;
listaDeTarefas[1] = tarefa1;
listaDeTarefas[2] = tarefa2;

console.log(listaDeTarefas)

const indiceCheck = prompt("Qual tarefa você já concluiu? 0 = primaira, 1 = para segunda, 2 = terceira")
console.log (listaDeTarefas[indiceCheck])

const tiraItem = listaDeTarefas.splice(indiceCheck, 1)
console.log(listaDeTarefas)