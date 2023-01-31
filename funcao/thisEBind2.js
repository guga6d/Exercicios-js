function Pessoa(){
    this.idade = 0
    const self = this// metodo para amarrar o this sem usar o .bind,atribua a uma constante dentro do objeto principal em que vc quer que o this aponte

    setInterval(function(){
        self.idade ++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa()