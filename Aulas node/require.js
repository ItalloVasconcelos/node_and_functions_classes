//Módulos nativos do node
const path = require('path')

console.log(path.basename(__filename))

// Enviando módulos pessoais
const myModule = require('./exports')

console.log(myModule)

