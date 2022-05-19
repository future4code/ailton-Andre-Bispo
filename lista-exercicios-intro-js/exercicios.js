// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt('Digite uma Altura')
  const largura = prompt('Digite uma Largura')
  const area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual')
  const anoDeNascimento = prompt('Digite seu ano de nascimento')
  const idade = anoAtual - anoDeNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 return peso / (altura * altura) 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual seu nome?")
const idade = prompt("Qual sua idade?")
const email = prompt("Qual o seu email?")

 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Qual sua primeira cor favorita?")
const cor2 = prompt("Qual sua segunda cor favorita?")
const cor3 = prompt("Qual sua terceira cor favorita?")

 console.log ([cor1,cor2,cor3])



}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  // implemente sua lógica aqui
  let primeiraArray = array[0]
  let ultimaArray = array.pop()
   array.push (primeiraArray)
  array[0] = ultimaArray
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}