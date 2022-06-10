function validarCPF() {
    let cpf = 0
    cpf = document.getElementById("CPF").value
    if (cpf.length < 11) {
        alert("O Campo CPF precisa ter 11 dígitos!!!")
    }
    
    let numeros = new RegExp("^[0-9]+$")
     if (numeros.test(cpf) === false) {
        alert("O Campo CPF deve conter apenas números!!!")
    }
    
    digitoum = cpf.substr(0, 1)
    digitodois = cpf.substr(1, 1)    
    primeiro_digito = calculaDV(cpf)
    segundo_digito = calculaDV(cpf * 10 + primeiro_digito)
    if (digitoum != primeiro_digito && digitodois != segundo_digito) {
        alert("CPF inválido!!!")
    }
}


function calculaDV(num) {
    var resto = 0, soma = 0;
    for (i = 2; i < 11; i++) {
        soma = soma + ((num % 10) * i);
        num = parseInt(num / 10);
    }
    resto = (soma % 11);
    return (resto > 1) ? (11 - resto) : 0;
}

const maquinas = document.getElementById("maquinas")
const saches = document.getElementById("saches")
const selecionados = document.getElementById("selecionados")
const total = document.getElementById("valor")

maquinas.addEventListener("change", selecionarMaquinas)
saches.addEventListener("change", selecionarSaches)

let i = 1

function selecionarMaquinas() {
    let opcaoMaq = maquinas.options[maquinas.selectedIndex]
    let precoMaq = opcaoMaq.value
    let nomeMaq = opcaoMaq.innerHTML
    selecionados.innerHTML += `${i++}. ${nomeMaq}\n`
    somarPreco(precoMaq)
}

function selecionarSaches() {
    let opcaoSac = saches.options[saches.selectedIndex]
    let precoSac = opcaoSac.value
    let nomeSac = opcaoSac.innerHTML
    selecionados.innerHTML += `${i++}. ${nomeSac}\n`
    somarPreco(precoSac)
}

function somarPreco(preco) {
    let valorProd = parseInt(preco)
    if (!total.value) {
        total.value = valorProd
    }
    else {
        total.value = parseInt(total.value) + valorProd
    }
}

function remover() {
    selecionados.innerHTML = ""
    saches.value = 0
    maquinas.value = 0
    total.value = ""
}

const inputCartao = document.getElementById("numerocartao")
const master = document.getElementById("master")
const visa = document.getElementById("visa")
const amex = document.getElementById("american")

function bandeira() {
    let numCard = inputCartao.value
    if (numCard == "") {
        uncheck()
    }
    if (numCard.length == 1) {
        verificaPrimeiroNumero(numCard)
    }
    if (numCard.length == 2 && numCard.charAt(0) != 4) {
        verificarBandeira(numCard)
    }
}

function verificaPrimeiroNumero(num) {
    let primeiroNumero = ["3", "4", "5"]
    if (!primeiroNumero.includes(num)) {
        inputCartao.value = ""
        return alert("Número de Cartão Invalido!!!")
    }
    if (num == 4) {
        visa.checked = true
    }
}

function verificarBandeira(num) {
    let mastercard = ["51", "52", "53", "54", "55"]
    let american = ["34", "37"]

    if (mastercard.includes(num)) {
        master.checked = true
    } else if (american.includes(num)) {
        amex.checked = true
    } else {
        inputCartao.value = ""
        return alert("Número de Cartão Invalido!!!")
    }
}

function uncheck() {
    let check = document.getElementsByName("cartao")
    check.forEach(item => {
        item.checked = false
    })
}