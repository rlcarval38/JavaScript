function  carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = (`Agora são Exatamente <strong>${hora} horas <strong>`)
    if (hora>=0 && hora < 12){
       //bom dia  
       img.src = 'fotodia.png'
       window.document.body.style.background = '#487892'
    }else if(hora >= 12 && hora <=18){
        //boa tarde
        img.src = 'fototarde.png'
        window.document.body.style.background = '#f88d21'
    }else{
        //boa noite
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#422c46'
        
    }
    
}
