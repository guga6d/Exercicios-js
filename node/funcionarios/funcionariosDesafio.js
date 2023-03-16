const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //desafio Mulher chinesa com menor salario
    //minha resposta
    const getGeneroFeminino = genero => {
        if(genero.genero === 'F'){
            return true
        }
    }
    const getPais = pais => {
        if(pais.pais === 'China'){
            return true
        }
    }
    const getSalario = salario => {
        if(salario.salario <= 2440){
            return true
        }
    }
    
    const mulherChinesaComMenorsalario = funcionarios.filter(getGeneroFeminino).filter(getPais).filter(getSalario)
    console.log(mulherChinesaComMenorsalario)
})