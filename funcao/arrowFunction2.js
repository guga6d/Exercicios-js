function Pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa

//o this na arrow function nao varia,ele aponta para o contexto lexico onde ele foi escrito