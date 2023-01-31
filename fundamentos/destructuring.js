//destructuring e usado para retirar um atributo de um objeto ou array para vc utiliza-lo em sua aplicacao
const pessoa = {
    nome:'Ana',
    idade:5,
    altura:2,
    endereco: {
        logradouro:'Rua ABC',
        numero:1000
    }
};
const {nome , idade} = pessoa; 
console.log(nome, idade);

const {nome: n, idade:i} = pessoa;
console.log(n , i);

const {sobrenome, bemhumorada=true} = pessoa;
console.log(sobrenome, bemhumorada);

const {endereco: {logradouro, numero}} = pessoa;
console.log(logradouro, pessoa);