//funcao em JS e First-Class Object (Citizens)
//Higher-Order function

//criar funcao de forma literal
function fun1() { }

// armazenar funcao em uma vareavel
const fun2 = function() {}

//armazernar funcao em um array
const array = [function(a,b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//passar uma funcao com parametro
function run(fun) {
    fun()
}
run(function(){console.log('Rodando...')})

//uma funcao poder retornar/conter outra funcao
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)