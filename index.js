const personInf = require('./information')
const cowsay = require('cowsay')

console.log(cowsay.say({text:`Hello, my name is ${personInf.name} and I'm from ${personInf.campus}`, e: '-O', T:'U'}))