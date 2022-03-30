const { EventEmitter }  = require('events')
//Criando Eventos
const ev = new EventEmitter()

//Ouvindo e executando ações para eventos
// ev.on('SaySomething', (message) => {
//     console.log("Estou ouvindo algo", message)
// })

// Dispara somento o 1° elemento
ev.once('SaySomething', (message) => {
    console.log("Estou ouvindo algo", message)
})

//Emitindo o evento
ev.emit('SaySomething', 'Itallo')
ev.emit('SaySomething', 'Sávio')
ev.emit('SaySomething', 'Moreira')

