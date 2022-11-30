    let num = document.getElementById('numdig')
    let lista = document.getElementById('finalizar')
    let res = document.getElementById (`res`)
    let valores = []


    function isNumero(n){
        if (Number(n)>= 1  && Number(n)<=100){
            return true
        }else{
            return false
        }

    }
    function inLista (n, l){
        if (l.indexOf(Number(n))!=-1){
            return true     

        }else {
            return false
        }

    }

    function adicionar(){
    
        if (isNumero(num.value) && !inLista(num.value, valores)){

            valores.push(Number(num.value))
            let numad = document.createElement('option')
            numad.text = `Valor ${ num.value } adicionado`
            lista.appendChild( numad )
            res.innerHTML = ``

        } else {
            window.alert ('Valor invalido ou ja encontrado na lista')
    
        }
     
        num.value = ``
        num.focus()
    
} 
    function finalizar() {
        if( valores.length == 0){
            window.alert (`Voce precisa adicionar um numero`)
        }else{
            
            let total = valores.length
            let maior = valores [0]
            let menor = valores [0]
            let soma = 0
            let media = 0 
            for (let pos in valores){ 
               
               soma += valores[pos]
               media = soma / total 
                if (valores [pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]

             
            }
             res.innerHTML = ``    
             res.innerHTML += `<p>Total de numeros adicionados foi <strong>${total}</strong>.</p> ` 
             res.innerHTML += `<p> O maior valor é <strong>${maior}</strong>. </p>`
             res.innerHTML += `<p> O menor valor é <strong>${menor}</strong>.</p>`
             res.innerHTML += `<p> A soma de todos valores sao <strong>${soma}</strong>.</p>`
             res.innerHTML += `<p> A media de todos valores sao <strong>${media}</strong>.</p>` 

        }
        

    }
    



   
   


          
