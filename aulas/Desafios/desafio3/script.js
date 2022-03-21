function contador() {
    var inicio = window.document.getElementById("ini")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("pas")
    var resp = window.document.getElementById("resp")
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var n3 = Number(passo.value)
    
    resp.innerHTML = `${n1}👉 `
    
        for(var i = n1 + n3 ; i <= n2; i = i + n3) {
            if(i <= n2) {
            resp.innerHTML +=`${i} 👉 `    
        }  
        if(i >= n2) {
            resp.innerHTML = `oii`
        }
     

     }
     for(var s = n1 - n3; s >= n2; s = s - n3 ) {
        if (n2 <= s) {
        resp.innerHTML +=`${s} 👉 `; 
        } 
        

    }
    
    
   
}