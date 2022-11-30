let num = [5,8,2,9,3]

//console.log(`Nosso vetor é o ${num}`)
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} elementos `)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1){
    console.log(`o valor nao foi encocntrado`)
    }else{
    console.log(`o valor 8 esta na posição ${pos}`)
    }

