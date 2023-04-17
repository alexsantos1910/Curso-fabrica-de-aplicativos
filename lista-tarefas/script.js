
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [] ;

function renderTarefas(){
  listElement.innerHTML = "";

  tarefas.map((todo)=>{
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href","#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let posicao = tarefas.indexOf(todo);

    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

    liElement.appendChild(tarefaText);
    listElement.appendChild(liElement);
    liElement.appendChild(linkElement);


  })

}

renderTarefas();


function adicionarTarefas(){
  if(inputElement.value === ''){
    alert("Digite alguma tarefa");
    return false;
  }else{
    let novaTarefa = inputElement.value;

    tarefas.push(novaTarefa);
    inputElement.value = '';

    renderTarefas();
    salvaDados();

  }

}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvaDados();
}

function salvaDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}