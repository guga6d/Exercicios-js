function getInteiroAleatorioEntre(min,max){
    const valor =Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao1 = 0

while (opcao1 != -1) {
    opcao1 = getInteiroAleatorioEntre(-1,10)
    console.log(`O numero escolhido foi ${opcao1}`)
}

console.log('Ate a proxima!')