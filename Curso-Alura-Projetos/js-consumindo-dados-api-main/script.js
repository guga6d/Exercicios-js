const cepInput = document.getElementById('cep')


async function buscaEndereco(cep) {
    try{
    let consultaCep =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaCEPConvertido = await consultaCep.json()
    if(consultaCEPConvertido.erro) {
        throw Error('CEP inexistente')
    }
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')
    const complemento = document.getElementById('complemento')

    bairro.value = consultaCEPConvertido.bairro
    cidade.value = consultaCEPConvertido.localidade
    estado.value = consultaCEPConvertido.uf
    complemento.value = consultaCEPConvertido.complemento

    console.log(consultaCEPConvertido)
    return consultaCEPConvertido
    }catch(erro) {
        const mensagemErro = document.getElementById('erro')
        mensagemErro.innerHTML = '<p>Cep Invalido ou Inexistente</p>'
        console.log(erro)
    }
}



cepInput.addEventListener('focusout', () => buscaEndereco(cepInput.value))