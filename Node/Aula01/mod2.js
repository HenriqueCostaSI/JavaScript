const { sobrenome } = require("./mod1");

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

}

module.exports = {
   nome, sobrenome, Pessoa
}