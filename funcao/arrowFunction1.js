let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {return 2 * a}

dobro = a => 2 * a /*Se a funcao arrow tiver apenas um parametro o parenteses podera ser retirado
Se a funcao tiver apenas uma linha as chaves poderao ser tiradas,
funcoes arrow sem um corpo tem o return implicito*/

console.log(dobro(Math.PI))

let Ola = function() {
    return 'Ola'
}

Ola = () => 'Ola'
Ola = _ => 'Ola' //Possui parametro

console.log(Ola())