let div = document.getElementById("data")

var data = new Date()

var dia = String(data.getDate()).padStart(2,"0")

var mes = String(data.getMonth() + 1).padStart(2, '0');

var ano = data.getFullYear();

dataAtual = dia + '/' + mes + '/' + ano;

let tela = div.innerHTML(dataAtual)