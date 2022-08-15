// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  EXERCICIO 3

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movie = {
    name:string
    year:number
    gender: GENERO
    score?:number
}

function newMovie (
    name:string,
    year:number,
    gender:GENERO,
     score?:number
):Movie {
    const addMovie: Movie = {
        name,
        year,
        gender,
    }
    if (score) {
        addMovie.score = score
    }
    return addMovie
}

console.log(newMovie("velozes e furiosos 999", 2088, GENERO.ACAO, 10))
console.log(newMovie("velozes e furiosos 999", 2088, GENERO.ACAO))
