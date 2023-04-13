var area = document.getElementById('area')
var resultado = document.getElementById('resultado')

function entrar(){
    var nome = prompt ('seu nome? ')

    if(nome === '' || nome === null ){
        alert('opps, algo deu errado!')
        area.innerHTML = 'clicou no botão para acessar...'
    }else{
        area.innerHTML = `Seja bem vindo ${nome}`

        n1 = document.getElementById(p1)
        n2 = document.getElementById(p2)


        let botaosair = document.createElement('button')
        botaosair.innerText = 'Sair da conta'
        botaosair.onclick = sair

        area.appendChild(botaosair)
    }

    function sair(){
        alert('Até mais!!')
        area.innerHTML = 'Você saiu!'
    }


    function media(nota1, nota2){
        var media = (nota1 + nota2) / 2

        if(media >=7) {
            console.log(`Aluno ${nome} aprovado com media ${media}`)
        }else if (media < 7){
            console.log(`Aluno ${nome} reprovado com media ${media}`)
        }
    }
}