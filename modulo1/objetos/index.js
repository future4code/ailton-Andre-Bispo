// # ATIVIDADE DE INTERPRETAÇÂO

// ATIVIDADE 1

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])


//R>>>>>
// "Matheus Nachtergaele"
// "Virginia Cavendish"
//  "Globo", horario: "14h"







// ATIVIDADE 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//A >>>>>>
//"Juca",3,SRD
//"Juba",3,SRD
//"jubo",3,SRD

//B >>>>>>
//copia/espelelha

// ATIVIDADE 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


//A >>>>>>
//R >>>> false

//B >>>>>> null  // achei qu ia dar null mas da indefinido/undefined



// ## EXERCICIOS DE ESCRITA

// ATIVIDADE 1

// EXERCICIO A

// Exemplo de entrada
const pessoaX = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 // Exemplo de saída
 "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

 function frase (objeto) {
     console.log(`Eu ou ${objeto.nome}, mas pode me chamar de 
     ${objeto.apelidos[0]},${objeto.apelidos[1]}, ou ${objeto.apelidos[2]}.`)
 }
 frase(pessoaX)

// EXERCICIO B

 const novosApelidos = {
     ...pessoaX,apelidos:['amada','catarrenta','xuxu']
     
 }
 frase(novosApelidos);



 // ATIVIDADE 2

 // EXERCICIO A
 const pessoa1 = {
     nome:"André",
     idade:27,
     profissao:"eletricista"
 }
 
 const pessoa2 ={
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}

// EXERCICIO B

function meusDados (pessoas) {
    ;
    let frase1 = (`[${pessoas.nome},${pessoas.nome.length},${pessoas.idade},${pessoas.profissao},${pessoas.profissao.length}]`)
    ;
    return frase1
}
 console.log(meusDados (pessoa1),meusDados (pessoa2))
 


 //ATIVIDADE 3

 // EXERCICIO A
 var carrinho = [];

 // EXERCICIO B
const fruta1 = {
    nome: 'Manga',
    disponivel: true
}

const fruta2 = {
  nome: 'Banana',
  disponivel: true
}
const fruta3 = {
  nome: 'Uva',
  disponivel: true
}

// EXERCICIO C
function comprar (fruta) {
    carrinho.push(fruta)
}
comprar ([fruta1,fruta2,fruta3])
// EXERCICIO C

console.log(carrinho)