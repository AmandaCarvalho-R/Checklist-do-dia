const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()


    console.log(evento.target.elements['tarefa'].value)
})


