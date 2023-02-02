const notas = [5.3, 6.6, 7.7, 8.2, 3.4, 9.0]

//Sem callback
let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callback

let notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

let notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

let notasMenorQ7 = nota => nota < 7
let notasBaixas4 = notas.filter(notasMenorQ7)
console.log(notasBaixas4)