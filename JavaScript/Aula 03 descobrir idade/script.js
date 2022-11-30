function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
    if ( fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados digitados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 21 ){
                //jovem
                img.setAttribute('src', 'homemjovem.png') 
                document.body.style.background = ('blue') 
            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src', 'homemadulto.png') 
                document.body.style.background = ('blue') 
            }else{
                //idoso
                img.setAttribute('src', 'homemidoso.png') 
                document.body.style.background = ('blue') 
            }
        }else if(fsex[1]){
            genero = 'Mulher'
            if(idade >= 0 && idade < 21 ){
                //jovem
                img.setAttribute('src', 'mulherjovem.png') 
                document.body.style.background = ('pink') 
            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src', 'mulheradulta.png') 
                document.body.style.background = ('pink') 
            }else{
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
                document.body.style.background = ('pink') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos.`
        res.appendChild (img)

    }
}