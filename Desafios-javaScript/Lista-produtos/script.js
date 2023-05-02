

let lista = ["Computador","TV", "Telefone", "Mouse", "Teclado", "ps5"]
console.log(lista)


let quantidade = lista.length
console.log(`existe ${quantidade} produtos dentro da lista`)


let posição = lista.indexOf("Mouse")

lista.splice(posição, 1)
console.log(lista)

function buscar(produto){
    let item = lista.indexOf(produto)
    if(item >= 0){
        return console.log("O "+ produto + " Foi encontrado no estoque")
    }if(item === -1){
        return console.log("Infelimente esse produto não existe no estoque")
    }
}

console.log(buscar("ps5"))

lista.splice(1, 1)
console.log(lista)