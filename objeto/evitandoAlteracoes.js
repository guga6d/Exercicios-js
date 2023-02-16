//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualquer', preco:1.99, tag:'promocao'
})
console.log('Extensivel ',Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome:'Maria',idade:25}
Object.seal(pessoa)
console.log('Selado ',Object.isSealed(pessoa))
pessoa.sobrenome = 'Ladeia'
pessoa.idade = 20
delete pessoa.nome
console.log(pessoa)

//Object.freeze = Object.seal + valores constantes