// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  EXERCICIO 4

enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Colaborador = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

const equipe: Colaborador[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

function mktPresencial(lista: Colaborador[]): Colaborador[] {

    const filtrarColaborador: Colaborador[] = lista.filter((item: Colaborador) => {
        const primeiraCondicao = item.setor === SETOR.MARKETING
        const segundaCondicao = item.presencial === true
        return primeiraCondicao && segundaCondicao
    })
    return filtrarColaborador
}

const filtrarColaborador:Colaborador[] = equipe.filter((item) => {
  return item.setor === SETOR.MARKETING && item.presencial === true;
});

console.table(filtrarColaborador);

console.table(mktPresencial(equipe))

