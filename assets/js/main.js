const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const novoItem = document.createElement('li')

//Capturando o elemento do formulário

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements['tarefa'].value)
})

//Adicionando o elemento a minha lista

function criaElemento(tarefa){

    novoItem.classList.add("item")
    novoItem.innerHTML = tarefa 
    lista.appendChild(novoItem)
    
}

//Adicionando ao LocalStorage

