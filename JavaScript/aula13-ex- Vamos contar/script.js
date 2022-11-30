function conte(){
    let ini = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let pas = window.document.getElementById('passo')
    let res = window.document.getElementById('res') 
    

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        window.alert ('[ERRO] Verifique os dados digitados e tente novamente!')

    } else {
        res.innerHTML += `Contando: <br> `
        let i = Number (ini.value)
        let f = Number (fim.value)
        let p = Number (pas.value)
        if (p <= 0 ){
            window.alert ('Passo invalido, considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            } 
            }else{
                // contagem regressiva
                for (var c = i; c >= f; c-= p){
                    res.innerHTML +=` ${c} \u{1F449} `
                }
            }
        }
        
          res.innerHTML +=`\u{1F3C1}`
    }
        
            
        
           
     

    
    
   



