// Estrategia 1 para definir um parametro padrao
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(),soma1(3),soma1(1,2,3),soma1(0,0,0)) //essa estrategia pode acontecer bugs pois se vc fizer somas com o 0 a expressao voltara falsa e entao assumira o parametro padrao estabelecido

// Estrategias 2,3,4 para definir um parametro padrao
function soma2(a,b,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(),soma2(3),soma2(1,2,3),soma2(0,0,0))
//valor padrao ES 2015
function soma3(a=1,b=1,c=1) {
    return a + b + c
}
console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0))