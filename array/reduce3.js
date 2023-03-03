Array.prototype.reduce2 = function(callback,valorInicial){
    const indiceIncial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = 1; i < this.length; i++){
       acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

const soma = (total, somador) => total + somador
const nums = [1,2,3,4,5]

const resultado = nums.reduce2(soma,21)
console.log(resultado)