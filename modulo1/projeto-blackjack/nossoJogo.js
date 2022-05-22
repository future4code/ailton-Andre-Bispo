
let qualPegou
let somaComputador = 0
let maoComputador
let maoJogador
let somaJogador = 0
let desejaComprar
let somatorioTotal
let podeComprar = true
let podeComprarPc = false

   function jogo () {
      console.log ('Bem vindo ao jogo de Blackjack')
      let querJogar = confirm('Deseja iniciar uma nova rodada?')
      if(querJogar === true) {

        maoComputador = []
        maoJogador = []

         sorteiaCartas(maoComputador, 2)
         sorteiaCartas(maoJogador, 2)
         checaAses()

         pontosTotalJogador()

         if (somaJogador === 21) {
            podeComprar = false
         }  

         imprimeValorInicial()
         pontosTotalJogador()
         pontosTotalComputador()
         perguntaDesejaComprarMais()
         pcCompraMais()
         comparativo(somaJogador, somaComputador)
      }
      else {
         console.log('O jogo acabou')
      }}

   function checaAses () {
      while ((maoComputador[0].texto.includes("A") &&maoComputador[1].texto.includes("A"))
       || (maoJogador[0].texto.includes("A") &&maoJogador[1].texto.includes("A")))
      {
         console.log('Mulligan)')
         for(let i=0; i<2; i++){
           maoJogador.pop()                  
         }                 
         for(let i=0; i<2; i++){
           maoComputador.pop()
         }
         sorteiaCartas(maoComputador, 2)
         sorteiaCartas(maoJogador, 2)
         }}  

function imprimeValorInicial () {
   console.log(`A carta revelada do computador é: ${maoComputador[0].texto}`)
 //  console.log(maoComputador)
   console.log(`As suas cartão são: ${maoJogador[0].texto} ${maoJogador[1].texto} -
    pontuação ${maoJogador[0].valor +maoJogador[1].valor}`)
}

function sorteiaCartas (pegarCartas, numeroDeVez) {
   for (let i = 0; i<numeroDeVez; i++){
      pegarCartas.push(comprarCarta())
      }
}

function pontosTotalJogador () {
   somaJogador = 0
   for (let i = 0; i < maoJogador.length; i++){
      somaJogador = somaJogador + maoJogador[i].valor
   }
}

function pontosTotalComputador () {
   somaComputador = 0
   for (let i = 0; i < maoComputador.length; i++) {
      somaComputador = somaComputador + maoComputador[i].valor
   }
}

function comparativo () {

   if ((somaJogador === 21 && somaComputador !== 21 || somaJogador < 21 && somaComputador > 21 || somaJogador < 21 && somaComputador < somaJogador)){
      console.log('O usuario venceu!')
   }
      else if (somaComputador > somaJogador || somaJogador > 21 && somaComputador < 21) {
   console.log('O computador venceu!')
   }
   else if ((somaComputador === somaJogador || somaComputador && somaJogador > 21)) {
      console.log('Empate!')
   }
   console.log(`Usuario:${somaJogador}, PC: ${somaComputador}`) 
}

function perguntaDesejaComprarMais () {

   while (podeComprar === true) {
      if (confirm('Deseja comprar mais cartas?')) {
         sorteiaCartas(maoJogador, 1)
         console.log(`Comprou ${maoJogador[maoJogador.length-1].texto}`)
         pontosTotalJogador()
         if (somaJogador >= 21) {
            podeComprar = false
         }
      } else {
         podeComprar = false
      }
   }
}

function pcCompraMais () {
   if (somaComputador<somaJogador && somaJogador <= 21) {
      podeComprarPc = true
   }
   while (podeComprarPc === true){

      sorteiaCartas(maoComputador, 1)
      console.log(`O computador comprou ${maoComputador[maoComputador.length-1].texto}`)
      pontosTotalComputador()

      if (somaComputador === 21) {
         podeComprarPc = false
      }
      else if (somaComputador > somaJogador){
         podeComprarPc = false
      }
      else {
         podeComprarPc = true
      }
   }
}

jogo()
