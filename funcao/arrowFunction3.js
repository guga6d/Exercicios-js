// Testes e Exemplos do this em function e arrow function
let comparaComThis = function(param) {
    return console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // o bind nao funciona na arrow function
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)