const td = document.getElementById("img-td")
const preco = document.getElementById("preco-td")
const imagem = document.createElement("img")

const piccolo = document.getElementsByTagName("div")[0]
const inissia = document.getElementsByTagName("div")[1]
const uc = document.getElementsByTagName("div")[2]
const hd = document.getElementsByTagName("div")[3]

function abrirPiccolo() { 
    preco.innerHTML = "R$ 340,00"
    imagem.src = "/img/Dulce_GustoP.jpg"
    td.appendChild(imagem)
    piccolo.style.color = "#662222"
}

function abrirInissia() {
    preco.innerHTML = "R$ 300,00"
    imagem.src = "/img/Nespresso_InissiaP.jpg"
    td.appendChild(imagem)
    inissia.style.color = "#662222"
}

function abrirUC() {
    preco.innerHTML = "R$ 400,00"
    imagem.src = "/img/Nespresso_C50P.jpg"
    td.appendChild(imagem)
    uc.style.color = "#662222"
}

function abrirHD() {    
    preco.innerHTML = "R$ 230,00"
    imagem.src = "/img/SenseoP.jpg"
    td.appendChild(imagem)
    hd.style.color = "#662222"
} 

(function vazio(){
    imagem.src = "/img/vazio.jpg"
    td.appendChild(imagem)
})()