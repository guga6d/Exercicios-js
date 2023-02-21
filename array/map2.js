const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta","preco":7.50}'
]

// Desafio: retornar apenas o preco

const obj = param => JSON.parse(param)
const Preco = preco => preco.preco

const precos = carrinho.map(obj).map(Preco)
console.log(precos)