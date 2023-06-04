const botoesAddRemov = document.querySelectorAll('[data-contador]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

botoesAddRemov.forEach(botao => {
    botao.addEventListener('click',(e) => {
        addRemovEquip(e.target.dataset.contador,e.target.parentNode)
        if(e.target.dataset.contador === '+') { 
            atualizaEstatisticasAdd(e.target.dataset.peca)
        }else {
            atualizaEstatisticasSub(e.target.dataset.peca)
        }
    })
})

function addRemovEquip(operacao, controle) {
    const equipamentos = controle.querySelector('[data-equipamento]')
    if(operacao === '-') {
        equipamentos.value = parseInt(equipamentos.value) -1
    }else{
        equipamentos.value = parseInt(equipamentos.value) +1
    }
}

function atualizaEstatisticasAdd(peca){
    console.log(peca)
   estatisticas.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
   })
}

function atualizaEstatisticasSub(peca){
    console.log(peca)
   estatisticas.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
   })
}

