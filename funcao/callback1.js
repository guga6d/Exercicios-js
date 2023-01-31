const fabricantes = ['Audi','Bmw', 'Mercedes']

function imprimir(nome,indice){
    return console.log(`${indice+1}.${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante){
    return console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante))
//Callback, passa uma funcao para outra funcao e quando determinado evento acontecer a funcao passada ira ser chamada de volta