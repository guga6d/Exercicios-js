//Voce pode transformar um objeto em um objeto com valores constantes
//que nao poderao ser alterados,deletados e nem podera ser adcionado novos valores
//usando Object.freeze()
//Exemplos...
const pessoa = {nome:'Joao'}
pessoa.nome = 'Vitor'

Object.freeze(pessoa)

pessoa.nome = 'Mateus'
pessoa.endereco = 'Rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstanteDesdeaCriacao = Object.freeze({nome:'Rafael'})
pessoaConstanteDesdeaCriacao.nome = 'Gustavo'
console.log(pessoaConstanteDesdeaCriacao.nome)