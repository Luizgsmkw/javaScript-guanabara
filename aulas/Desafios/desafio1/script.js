function carregar() {
    let div1 = window.document.getElementById("div1");
    let img = window.document.getElementById("manha")
    let agora = new Date()
    let hora = agora.getHours()
    
    if(hora >= 0 && hora < 25) {
    div1.innerHTML = `Agora são ${hora} horas`
    }

    if(hora >= 0 && hora < 5) {
     img.src = "madrugada-250.jpg"
     document.body.style.background = "#2c2735ea"
    } else if(hora < 12) {

      img.src = "manha-200.jpg"
      document.body.style.background = "#ECDDB4"

    } else if(hora >= 12 && hora < 18) {

       img.src = "tarde-250.jpg"
       document.body.style.background = "#BD7739"
     
     

    } else if(hora >=18 && hora < 25) {

       img.src = "noite-250.jpg"
       document.body.style.background = "#121c1dee"

    } else {
        alert("[ERROR] Hora invalida")
        document.body.style.background = "#4C3607"

    }
}