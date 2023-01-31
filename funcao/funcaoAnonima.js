const soma = function (a,b) {
    return a+b
}
console.log(soma(1,2))

const imprimirResultado = function(y, x, operacao = soma) {
    console.log(operacao(y,x))
}

imprimirResultado(2,3)
imprimirResultado(2,3,soma)
imprimirResultado(2,3,function(y,x){
   return y-x
})
imprimirResultado(2,3,(x,y) => y * x)

const pessoa = {
    falar:function(){
        console.log('Opa')
    }
}

pessoa.falar()