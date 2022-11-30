function gerar(){
    var n1 = document.getElementById('tab')
        if (n1.value.length == 0){
            res.innerHTML = (`voce nao digitou nenhum numero!`)

        }else {
            var n11 = Number (n1.value)
            var c1 = n11 * 1
            var c2 = n11 * 2 
            var c3 = n11 * 3
            var c4 = n11 * 4
            var c5 = n11 * 5
            var c6 = n11 * 6
            var c7 = n11 * 7
            var c8 = n11 * 8
            var c9 = n11 * 9
            var c10 = n11 * 10
            
            res.innerHTML = ('o Resultado da multiplicação é: ')
            res.innerHTML += (`<p>${n11} x 1 = ${c1}</p>`)
            res.innerHTML += (`<p>${n11} x 2 = ${c2}</p>`)
            res.innerHTML += (`<p>${n11} x 3 = ${c3}</p>`)
            res.innerHTML += (`<p>${n11} x 4 = ${c4}</p>`)
            res.innerHTML += (`<p>${n11} x 5 = ${c5}</p>`)
            res.innerHTML += (`<p>${n11} x 6 = ${c6}</p>`)
            res.innerHTML += (`<p>${n11} x 7 = ${c7}</p>`)
            res.innerHTML += (`<p>${n11} x 8 = ${c8}</p>`)
            res.innerHTML += (`<p>${n11} x 9 = ${c9}</p>`)
            res.innerHTML += (`<p>${n11} x 10 = ${c10}</p>`)
            
            //res.innerHTML = (`${n11}`)
        }
         
}