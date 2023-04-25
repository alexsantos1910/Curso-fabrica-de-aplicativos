

// Spread Operator

/*
let primeiros = [2, 3, 5]

let numeros = [ ...primeiros, 6, 9, 1]

console.log(numeros)
*/

/*
let pessoas = {
    nome: "Alex",
    idade: 23,
    cidade: "Equador"
}

let novaPessoa = {
    ...pessoas,
    estado: "RN",
    profissão: "Programador"
}

console.log(novaPessoa)
*/

function novoUsuario(info){
    let dados = {
        ...info,
        status: "Ativo",
        data: "25/04/2023"
    }
    console.log(dados)
}

novoUsuario({nome: "Alex", idade: 23, prossição: "Programador"})