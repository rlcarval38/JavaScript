function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){ //contador recebe N; enquanto o contador for maior que 1; ele subtrai
        fat *= c
    }
    return fat
}
console.log (fatorial(5))