function time() {

    let instanciaData = new Date()
    let local = 'pt-BR'
    let visorData = window.document.getElementById("data")

    let data = instanciaData.toLocaleDateString(local, {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    let hora = instanciaData.toLocaleTimeString(local)

    visorData.innerHTML = `${data}, ${hora}`

}

function timeAutomatic() {

    time()

    setInterval(() => {
        time()
    }, 1000)

}

function somar() {

    let num1 = window.document.getElementById("num1")
    let num2 = window.document.getElementById("num2")
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    let numVisor = window.document.getElementById("resultado")

    let resultado = num1 + num2

    numVisor.innerHTML = `${resultado}`

}

function subtrair() {

    let num1 = window.document.getElementById("num1")
    let num2 = window.document.getElementById("num2")
    let numVisor = window.document.getElementById("resultado")

    num1 = Number(num1.value)
    num2 = Number(num2.value)

    let resultado = num1 - num2

    numVisor.innerHTML = `${resultado}`

}

function divisao() {

    let num1 = window.document.getElementById("num1")
    let num2 = window.document.getElementById("num2")
    let numVisor = window.document.getElementById("resultado")

    num1 = Number(num1.value)
    num2 = Number(num2.value)

    let resultado = num1 / num2

    numVisor.innerHTML = `${resultado}`

}

function multiplicacao() {

    let num1 = window.document.getElementById("num1")
    let num2 = window.document.getElementById("num2")
    let numVisor = window.document.getElementById("resultado")

    num1 = Number(num1.value)
    num2 = Number(num2.value)

    let resultado = num1 * num2

    numVisor.innerHTML = `${resultado}`

}

function limparDados() {

    let vazio = ""

    let numVisor = window.document.getElementById("resultado")
    numVisor.innerHTML = `${vazio}`

}