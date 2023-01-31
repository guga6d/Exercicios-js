function teste1(num) {
    if(num > 7) 
        console.log(num) //se vc nao associar um bloco '{}' a estrutura de controle ela ira rodar ou nao apenas a primeira sentenca de codigo
        console.log('final')
    
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {       //cuidado!!,nao usar ';' com estruturas de controle pois ela ira executar ou nao a sentenca de codigo vazia delimitada pelo ';'
        console.log(num)
    }
}