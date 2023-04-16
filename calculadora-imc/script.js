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
    foto2 = document.getElementById('foto2')
    foto3 = document.getElementById('foto3')
    
    if(imc < 17){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)}, você tem que comer mais bixa feia!! para parecer a obesa da sua mae kkk`)
        foto.innerHTML = "<img src ='fotos/maria.jpg' width = '250'>"
    }else if (imc > 17 && imc <= 18.49){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)},Você está abaixo do peso`)
    }else if (imc > 18.5 && imc <= 24.99){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)},Alex é perfeito , coisa rara!!!`)
        foto.innerHTML = "<img src ='fotos/alex.jpg' width = '250'>"
    }else if (imc > 25 && imc <= 29.99){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)},  vamos emagreçe povo feio , tudo obeso kkkk`)
        foto.innerHTML = "<img src ='fotos/alcione.jpg' width = '250'>"
        foto2.innerHTML = "<img src ='fotos/mae.jpg' width = '250'>"
        foto3.innerHTML = "<img src ='fotos/adrielly.jpg' width = '250'>"
    } else if (imc >= 30){
        resultado.innerHTML = (`Seu IMC é ${imc.toFixed(2)}, Você está obesa , bora emagreçe ta parecendo uma coxinha!!kkkk`)
        foto.innerHTML = "<img src ='fotos/alcimery.jpg' width = '250'>"
    }

    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
}