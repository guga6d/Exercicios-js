const notas = [5.5,6.4,7.4,8.1,9.3]

for(let i in notas) {
    console.log(i,notas[i])
}

const pessoa = {
    nome:'Ana',
    sobrenome:'Silva',
    idade:19,
    peso:57
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}