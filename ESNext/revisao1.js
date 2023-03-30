//let e var
{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)
//console.log(b) // variaveis let tem escopo de bloco

// Template Sting
const produto = 'iPad'
console.log(`${produto} e caro!`)

//Destructuring
const [l,e,...tras] = 'Cod3r'
console.log(l,e,tras)
const [x,y] = [10,20]
console.log(x,y)
const {idade:i,nome:n} = {idade:19,nome:'Roberta'}
console.log(i,n)