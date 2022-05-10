/*
- **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
        
        ```jsx
        let a = 10
        let b = 10
        
        console.log(b)
        
        b = 5
        console.log(a, b)
        ```

        R: primeiro aparece (10) depois aparece (10,5)
        
    2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
        
        ```jsx
        let a = 10
        let b = 20
        c = a 10
        b = c 10
        a = b 10
        
        console.log(a, b, c)
        ```
        R: (10,10,10)
        
    3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.
        
        ```jsx
        let p = prompt("Quantas horas você trabalha por dia?")
        let t = prompt("Quanto você recebe por dia?")
        alert(`Voce recebe ${t/p} por hora`)
        ```

        R: let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
            let let valorDia = prompt("Quanto você recebe por dia?")
            alert (`Voce recebe ${horasTrabalhadas/valorDia} por hora`)
        */


// let idade;
//let nome;
// console.log (typeof nome, typeof idade)

//no meu apareceu indefinido pois não tinha atribuido nenhuma informação


let nome = prompt ("Qual o seu nome?");
let idade = prompt ("Qual sua idade?");

console.log ("Olá", nome, "você tem", idade, "anos");

//agora aparece as informações pois alem de atribuidas foram "chamadas"

let Robo = prompt ("Você é um robo? S / N");
let Maior = prompt ("Você é maior de idade? S / N");
let Elu = prompt ("Are you a Boy or Girl? B / G");

console.log("Você é um robo?", Robo);
console.log("Você é maior de idade?", Maior);
console.log("Are you a Boy or Girl?", Elu);

let a = 10
let b = 25

c=a
a=b
b=c



console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10