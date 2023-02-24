//Por tras do Map
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){
        newArray.push(callback(this[i],this,i))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta","preco":7.50}'
]

// Desafio: retornar apenas o preco

const obj = param => JSON.parse(param)
const Preco = preco => preco.preco

const precos = carrinho.map2(obj).map2(Preco)
console.log(precos)