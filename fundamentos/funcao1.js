//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//se vc nao adcionar um parametro pra todos os parametros vai gerar um Nan
imprimirSoma(2,3,4,5,6)//se vc colocar mais paremetros do que o pedido antes a funcao vai ser preenchida com os primeiros parametros

//Funcao com retorno
function soma(a, b=0) { 
    return(a + b)
}
console.log(soma(2, 3))
console.log(soma(2))
//vc pode dar um valor para a funcao usando =    //no caso de se a funcao nao for preenchida com um parametro ela ira usar o valor dado anteriormente pelo =