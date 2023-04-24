let pessoas = {
    nome: "Alex",
    sobrenome: "Santos",
    profissão: "Programador",
    empresa: "Mercadinho chico de milton"
}

//const { nome, profissão, sobrenome, } = pessoas
/*console.log(pessoas.nome)
console.log(pessoas.sobrenome)

let nome = "teste"

const {nome:nomePessoas, empresa, sobrenome} = pessoas
console.log("nome das pessoa" + nomePessoas)*/

// =============

let nomes = ["Alex", "Matheus", "Lucas"]
/*
let { 0:Alex, 2:lucas } = nomes

console.log(Alex)
console.log(lucas)*/

let [primeironome, segundonome] = nomes

console.log(primeironome)
console.log(segundonome)