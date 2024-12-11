const { set } = require('lodash')
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000);

//setInterval(function () {
//setTimeout(function () {

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]//Segunda a Sexta
regra.hour = 17
regra.second = 30

const terefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})