let valores = [8,1,7,4,2,9]
valores.sort()

/*
console.log(valores[0])
for (let pos = 0; pos < valores.length; pos++){
    console.log (`a posição ${pos} tem o valor ${valores[pos]}`)
}*/ // ESSA É A FORMA TRADICIONAL


for (let pos in valores ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)//FORMA SIMPLIFICADA DE MOSTRAR 
}