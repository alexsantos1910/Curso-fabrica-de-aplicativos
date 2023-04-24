let inputElement = document.querySelector("#app input")
let listElement = document.querySelector("#app ul")
let buttonElement = document.querySelector("#app button")

let tarefas = JSON.parse(localStorage.getItem("@localTarefas")) || []

function renderTarefas(){
    listElement.innerHTML = "";

    tarefas.map((todo)=>{
        let liTarefas = document.createElement("li")
        let textTarefas = document.createTextNode(todo)

        let linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")

        let linktext = document.createTextNode("Excluir")
        linkElement.appendChild(linktext)

        let posicao = tarefas.indexOf(todo)

        linkElement.setAttribute("onclick", `excluirTarefas(${posicao})`)

        liTarefas.appendChild(textTarefas)
        listElement.appendChild(liTarefas)
        listElement.appendChild(linkElement)
    })
}

renderTarefas();

function adicionarTarefas(){
    if(inputElement.value === ''){
        alert("Por favor , Digite uma tarefa!!")
        return false
    } else{
        let novaTarefa = inputElement.value

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefas

function excluirTarefas(posicao){
    tarefas.splice(posicao, 1)
    salvarDados();
    renderTarefas();
}

function salvarDados(){
    localStorage.setItem("@localTarefas",JSON.stringify(tarefas))
}