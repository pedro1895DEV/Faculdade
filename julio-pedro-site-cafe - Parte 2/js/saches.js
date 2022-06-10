const dolceGusto = document.getElementsByClassName("sache-display")[0]
const senseo = document.getElementsByClassName("sache-display")[1]
const nespresso = document.getElementsByClassName("sache-display")[2]

const imgDg = document.getElementById("img-dolce")
const imgSens = document.getElementById("img-senseo")
const imgNes = document.getElementById("img-nespresso")
const imgsDg = document.querySelectorAll("#img-dolce img")
const imgsSens = document.querySelectorAll("#img-senseo img")
const imgsNes = document.querySelectorAll("#img-nespresso img")

function abrirDolce() {
    dolceGusto.classList.toggle("sache-display-active")
}

function abrirSenseo() {
    senseo.classList.toggle("sache-display-active")
}

function abrirNespresso() {
    nespresso.classList.toggle("sache-display-active")
}

function fecharDolce() {
    dolceGusto.classList.toggle("sache-display-active")
}

function fecharSenseo() {
    senseo.classList.toggle("sache-display-active")
}

function fecharNespresso() {
    nespresso.classList.toggle("sache-display-active")
}

let idxDol = 0
let idxSen = 0
let idxNes = 0

function carrosselDol() {
    idxDol++
    if(idxDol > imgsDg.length - 1) {
        idxDol = 0
    }

    imgDg.style.transform = `translateX(${-idxDol * 180}px)`
}

setInterval(carrosselDol, 1800)

function carrosselSen() {
    idxSen++
    if(idxSen > imgsSens.length - 1) {
        idxSen = 0
    }

    imgSens.style.transform = `translateX(${-idxSen * 180}px)`
}

setInterval(carrosselSen, 1800)

function carrosselNes() {
    idxNes++
    if(idxNes > imgsNes.length - 1) {
        idxNes = 0
    }

    imgNes.style.transform = `translateX(${-idxNes * 180}px)`
}

setInterval(carrosselNes, 1800)
