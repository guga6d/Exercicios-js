const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//Leitura de forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Leitura de forma assincrona
fs.readFile(caminho,'utf-8',(err,conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// forma mais simples de se ler arquivos JSON
const config = require('./arquivo.json')
console.log(config.db)

//leitura de um diretorio
fs.readdir(__dirname,(err,arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})