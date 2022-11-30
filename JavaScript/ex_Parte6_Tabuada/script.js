function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if ( num.value.length == 0 ) {
        window.alert ('Por favor, digite um numero! ')
    } else {
        let n = Number (num.value)
        let c = 1
        tab.innerHTML= ''
        while(c <= 10){
            let item = document.createElement('option')// é um modo de criar um option 
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //para selecionar dentro seletor
            tab.appendChild(item)//adicionar um evento filho
            c++
           

        }
    }
    
}