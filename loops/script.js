/*
// while = enquanto

var x = 1

while(x < 10){
    document.write("<br> o valor de x é:" + x)

    x++
}
*/


/*
// FOR = PARA

var valor = 20

for(a = 0; a <= valor; a++){
    document.write("<br> Valor do A é: " + a)
}
*/

// Switch

function pedir(){
    var valor = prompt("Digite um valor de 1 a 4")

    switch(Number(valor)){
        case 1:
            alert("Você escolheu 1 = suco")
            break
        case 2:
            alert("Você escolheu 2 = Agua gelada")
            break
        case 3:
            alert("Você escolheu 3 = Sorvete")
            break
        case 4:
            alert("Você escolheu 4 = Chamar o garçom")
            break
        default:
            alert("Escolha uma opção de 1 a 4")
            break
    }
}