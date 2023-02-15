const pai = {nome:'Raul', corCabelo:'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome)

const filha2 = Object.create(pai,{
    nome:{value:'Carla', writable : false, enumerable:true }
})

console.log(filha2.nome)
filha2.nome = 'Bia'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`por heranca ${key}`)
}