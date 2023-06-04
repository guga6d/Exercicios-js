const menorNumero = 1
const maiorNumero = 1000

const numeroSecreto = numeroAleatorio()

function numeroAleatorio() {
    return parseInt(Math.random() * maiorNumero +1)
}


const elementoMenorNumero = document.getElementById('menor-valor')
elementoMenorNumero.innerHTML = menorNumero
const elementoMaiorNumero = document.getElementById('maior-valor')
elementoMaiorNumero.innerHTML = maiorNumero

console.log(numeroSecreto)