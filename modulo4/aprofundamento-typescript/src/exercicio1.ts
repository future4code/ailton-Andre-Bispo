
enum CORES {
    VERMELHA = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

const minhaPessoa: Pessoa = {
    nome: "astrodev",
    idade: 35,
    corFavorita: CORES.VIOLETA
}

console.log(minhaPessoa)