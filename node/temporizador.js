const schedule = require('node-schedule') //temporizadoor node npm i node-schedule
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 3',function(){
    console.log('Executando tarefa1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa1')
},20000) //temporizador padrao do JS

//setImmediate temporizador padrao do JS
//setInterval temporizador padrao do JS

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando tarefa2',new Date().getSeconds())
})