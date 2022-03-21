
function verificar() {
    let un = window.document.getElementById("verifica")
    let resp = window.document.getElementById("resp")
    let pai = String(verifica.value)
    if(pai == "BRASIL") {
        resp.innerHTML = "Esse cadastro é só para pessoas que nasceram fora do Brasil"
    } else {
        resp.innerHTML = "Clique no link para fazer o cadastro"
    }
}