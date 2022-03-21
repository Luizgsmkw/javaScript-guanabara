function verificarId() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById("idade")
    var resp = window.document.getElementById("resp")
    
    if(fano.value.length < 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os daos e tente novamente")
        resp.innerHTML = "Erro"
    }
    var fsex = window.document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var gen = ""
    var img = document.getElementById("imagem")
     if(fsex[0].checked) {
        gen = "Homem"
    } else if(fsex[1].checked) {
        gen = "Mulher"
    }
    resp.style.textAlign = "center"
    resp.innerHTML = `Detectamos ${gen} com ${idade} anos`
    if(fsex[0].checked && idade >= 0 && idade < 12) {
       img.setAttribute("src", "img/menino-250.jpg")
    } else if (fsex[0].checked && idade >= 0 && idade < 25) {
        img.setAttribute("src", "img/garoto-250.jpg")
    } else if (fsex[0].checked && idade >= 0 && idade < 60) {
        img.setAttribute("src", "img/adulto-250.jpg")
    } else if (fsex[0].checked && idade >= 0 && idade < 120) {
        img.setAttribute("src", "img/idoso-250.jpg")
    } else if (fsex[1].checked && idade >= 0 && idade >= 0 && idade < 12) {
        img.setAttribute("src", "img/menina-250.jpg")
    } else if (fsex[1].checked && idade >= 0 && idade < 25) {
        img.setAttribute("src", "img/garota-250.jpg")
    } else if (fsex[1].checked && idade >= 0 && idade < 60) {
        img.setAttribute("src", "img/adulta-250.jpg") 
    } else if (fsex[1].checked && idade >= 0 && idade < 120) {
        img.setAttribute("src", "img/idosa-250.jpg")
    } else {
        resp.innerHTML = "Essa data não é valida"
        img.setAttribute("src", "img/x.png")
    }
    resp.appendChild(img)
}

