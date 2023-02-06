function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const notebook = {
    preco:2000,
    desc:0.2,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(notebook.getPreco())

const carro = {preco:50000, desc: 0.2}

// chamando uma funcao com o call e o apply
console.log(getPreco.call(carro,0.1,'$'))
console.log(getPreco.apply(carro,[0.3,'$']))
// a diferenca na chamada entre o call e o apply e a passagem de parametros
//para o .call o Primeiro parametro sempre sera o contexto e depois os parametros passados para a funcao getPreco
//para o .apply o Primeiro parametro sempre sera o contexto e depois os parametros passados para a funcao getPreco dentro de um array