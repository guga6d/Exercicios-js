const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe Seu nome:')
    process.stdin.on('data', data =>{
        const nome = data.toString()

        process.stdout.write(`Fala ${nome}`)
        process.exit()
    })
}