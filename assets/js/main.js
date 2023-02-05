const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = localStorage.getItem("itens") || []


//Capturando o elemento do formulário

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const tarefa = evento.target.elements['tarefa']

    criaElemento(tarefa.value)

    tarefa.value = ""
})

//Adicionando o elemento a minha lista

function criaElemento(tarefa){
    const novoItem = document.createElement('li')

    novoItem.classList.add("item")
    novoItem.innerHTML = tarefa 
    lista.appendChild(novoItem)

    const itemAtual = {
        "tarefa": tarefa
    }

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))
}



