const nums = [ 1, 2, 3, 4, 5]

//Map e um For com proposito

const resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado,nums) // o map retorna um novo array sem alterar o primeiro

const soma10 = e => e + 10
const triplo = e => e * 3
const paraReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

const exmp2resultado = nums.map(soma10).map(triplo).map(paraReal)
console.log(exmp2resultado)