const sequencia = {
    _valor:1,//convencao,Mostrando para os devs que essa variavel e pretendida ser acessada apenas internamente dentro desse objeto
    get valor(){
        return this._valor ++
    },
    set valor(valor){
        if(valor > this._valor){
            return this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)

sequencia.valor = 900
console.log(sequencia.valor,sequencia.valor)