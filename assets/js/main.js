const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
})


//Capturando o elemento do formulário

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const tarefa = evento.target.elements['tarefa']

    const existe = itens.find( elemento => elemento.tarefa === tarefa.value )

    const itemAtual = {
        "tarefa": tarefa.value
    }

    if (existe) {
        itemAtual.id = existe.id
        
        itemJaExistente(itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;

    criaElemento(itemAtual)

    itens.push(itemAtual)
    }
    localStorage.setItem("itens", JSON.stringify(itens))

    tarefa.value = ""
})

//Adicionando o elemento a minha lista

function criaElemento(item){
    const novoItem = document.createElement('li')

    novoItem.classList.add("item")
    novoItem.innerHTML = item.tarefa 
    novoItem.dataset.id = item.id

    lista.appendChild(novoItem)

    novoItem.appendChild(botaoDeleta(item.id))

}

function itemJaExistente(item) {
    alert("Este item já existe")
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function () {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
}



