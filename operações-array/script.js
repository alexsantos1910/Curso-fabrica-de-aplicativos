
/*
//MAP = Percorrer todo um array

let lista = ["Alex", "João", "Maria"]

lista.map((itens, index)=>{
    console.log(`Passou = ${itens} na posição ${index}`)
})
*/
/*

// REDUCE = O reduce busca reduzir um array

let numeros = [5, 2, 9, 1]

let total = numeros.reduce((acumulador, numero, indece, original)=>{
    console.log(`${acumulador} - total ate o momento`)
    console.log(`${numero} - valor atual`)
    console.log(`${indece} - indece atual`)
    console.log(`${original} - array original`)
    console.log("=======================")

    return acumulador += numero
})

console.log("Total de reduce: " + total)
*/
/*
// FIND = Buscar objetos dentro de um array
let listagem = [5 , "Alex", 7 , "jose"]

let buscar = listagem.find((item)=>{
    return item === "Alex"
})

console.log(buscar)
*/

//FILTER 

let nomes = ["Alex", "Adrielly", "Alcione", "Alcimery", "João", "Alex"]
let resultado = nomes.filter((itens)=>{
    return itens.length <=4
})

console.log(resultado)