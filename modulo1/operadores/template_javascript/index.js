/*
## Atividade 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

#Resulatado: false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

#Resulatado: false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

#Resulatado: true

console.log("d. ", typeof resultado)

#Resulatado: bool



## Atividade 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

#Resposta: será impresso os dois numeros concatenados


## Atividade 3

não foi posto como "number", é só adicionar


*/

// ## Atividade Escrita ##

// # Atividade 1

 let idadeUsuario = Number(prompt ('Qual a sua idade?'));
// let idadeAmigo = Number(prompt ('Qual a idade do seu melhor amigo?'));
// let comparativo = idadeUsuario >= idadeAmigo;

// console.log("Sua idade é maior que à do seu amigo?", comparativo);
// console.log(" A diferença em anos entre vocês é de:",idadeUsuario - idadeAmigo);

// # Atividade 2

// let numeroPar = Number(prompt('Insira um número PAR:'));
// let ehPar = numeroPar % 2

// console.log ("Você sabe oque é um número par? Se 0 sim:",  ehPar)

// Sempre q for PAR vai dar ZERO
//sempre q IMPAR vai dar outro número


// # Atividade 3

let anoBissexto = idadeUsuario/4;
let idadeMeses = idadeUsuario*12;
let idadeDias = parseInt ((idadeUsuario*365) + anoBissexto);
let idadeHoras = (idadeDias*24) + (anoBissexto*24);
console.log(`Sua idade em meses é ${idadeMeses}, Sua idade em dias é ${idadeDias}, Sua idade em horas é ${idadeHoras}`);

// o "parseInt" foi uma dica de um colega pois assim eu só pego o numero "cheio", nós estavamos discutindo como seria o cálculo com os anos bissextos.

// # Atividade 4

let num1 = Number(prompt("Digite um número"));
let num2 = Number(prompt("Digite outro número"));

let ehMaior  = num1 > num2;
let ehIgual = num1 === num2;
let ehDivisivel1 = num1 % num2;
let ehDivisivel2 = num2 % num1;
let testeDivisivel1 = ehDivisivel1 === 0;
let testeDivisivel2 = ehDivisivel2 === 0;

console.log("O primeiro número é maior que o segundo?", ehMaior);
console.log("O primeiro número é igual ao segundo?", ehIgual);
console.log("O primeiro número é divisível pelo segundo?", testeDivisivel1);
console.log("O segundo número é divisível pelo primeiro?", testeDivisivel2);

