const mod1 = require('./mod1');
// const falaNome = require('./mod1').falaNome;
console.log(mod1.falaNome());

const {nome, sobrenome, falaNome} = require('./mod1');//desestruturação
console.log(nome, sobrenome, falaNome());
