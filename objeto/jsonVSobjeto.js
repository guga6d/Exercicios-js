const obj = { a: 1, b: 2, c: 3, d: function(){return a + b + c}}
console.log(JSON.stringify(obj))//JSON nao suporta funcoes
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))//O nome dos atributos do JSON precisam ser delimitados por " "

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))// Sintaxe valida para o JSON
console.log(JSON.parse('{"a": 1.3, "b": "String", "c": true, "d": {},"e": []}'))//JSON suporta booleanos,objetos,arrays,strings//
//Strings no JSON tambem precisam ser delimitadas por " "