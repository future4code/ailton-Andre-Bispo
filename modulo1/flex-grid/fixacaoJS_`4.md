```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let contagem = arrayDeNumeros.filter((numero) => {return numero === numeroEscolhido})
    if (contagem.length>0){
    return(`O número ${numeroEscolhido} aparece ${contagem.length}x`)  
    }else {return "Número não encontrado"}
}```