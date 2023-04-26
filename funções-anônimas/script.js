
// funções anônimas

let subtrair = (numero1, numero2) => {
    let dividir = numero1 - numero2
    console.log(dividir)
}

subtrair(39, 15)
/*
() => {}
*/
// função normal

function somar (n1, n2){
    let valor = n1 + n2
    console.log(valor)
}

somar(10, 35)

let numeros = [1 , 4, 7]

numeros.map((num)=>{
    console.log(num)
})
