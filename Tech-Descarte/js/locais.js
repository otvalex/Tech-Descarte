let img1 = document.getElementById("img1")


function showimg1(img1){
    let informationbar = document.getElementById("informationbar")
    let imginformation = document.getElementById("imginformation")
    let nameplace = document.getElementById("nameplace")
    let descplace = document.getElementById("descplace")
    let hourplace = document.getElementById("hourplace")
    let telplace = document.getElementById("telplace")

    informationbar.setAttribute("style", "display: block")
    imginformation.src = "/Imagens/local 1.png"
    nameplace.innerText = "Nomezin"
    descplace.innerText = "Trabalham com Lixo"
    hourplace.innerText = "8h às 18h"
    telplace.innerText = "(44) 9 9999-9999"
}