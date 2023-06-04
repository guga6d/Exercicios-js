function chuteValido(chute) {
    const numero = +chute


    if(Number.isNaN(numero)) {
        if(chute.toUpperCase() == 'GAME OVER'){
            document.body.innerHTML = `
            <h1>Game Over!</h1>
            <h3>O numero secreto era ${numeroSecreto}</h3>
    
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
        }else{
        elementoChute.innerHTML += '<div> Chute Invalido</div>'}
    }else if(numero > maiorNumero || numero < menorNumero) {
        elementoChute.innerHTML += `
        <div>Chute deve ser entre ${menorNumero} e ${maiorNumero}</div>`
    }else if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Voce Acertou!</h1>
        <h3>O numero secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i></div>'
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O numero secreto e menor <i class="fa-solid fa-arrow-down"></i></div>'
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})