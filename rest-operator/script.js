

// Rest Operator

/*
function convidados(...nomes){
    console.log("Seja bem-vindo");
    console.log(nomes)
}

convidados("Alex", "joão", "Matheus")
*/

function sorteio(...numeros){
    console.log(numeros)

    const novoNumeros = Math.floor(Math.random() * numeros.length)
    console.log("Numeros gerados foi "+ numeros[novoNumeros])
}

sorteio(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)