class Lancamentos{
    constructor(nome='Generico',valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinaceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }
    addLancamentos(...Lancamentos){
      Lancamentos.forEach(l => {this.Lancamentos.push(l)})
    }
    sumario(){
        let valorConsolidado = 0
        this.Lancamentos.forEach(l =>{
        valorConsolidado += l
        })
        return valorConsolidado
    }
}

const salario = new Lancamentos('Salario',10000)
const contaDeLuz = new Lancamentos('Conta de Luz',-200)

const contas = new cicloFinaceiro(2,2023)

contas.addLancamentos(salario,contaDeLuz)
contas.sumario()
console.log(contas)