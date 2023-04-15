var peso 
var altura
var imc
var resultado


function calcular(event){
    event.preventDefault()

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura*altura)

    resultado = document.getElementById('resultado')
    foto = document.getElementById('foto')
    
    if(imc < 17){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)}, você está muito abaixo do peso, cuidado!!`)
    }else if (imc > 17 && imc <= 18.49){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)},Você está abaixo do peso`)
    }else if (imc > 18.5 && imc <= 24.99){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)},Peso normal`)
    }else if (imc > 25 && imc <= 29.99){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)}, Você está acima do peso,cuidado!!`)
    } else if (imc >= 30){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)}, Você esta muito acima do peso , procure um profisional!`)
        foto = scr()
        foto.innerHTML = 
    }
}