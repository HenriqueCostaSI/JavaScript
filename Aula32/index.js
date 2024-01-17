//Criando um objeto

/**const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Costa',
    idade: 25
};

console.log(pessoal.nome);
**/
function Criapessoa(nome, sobrenome, idade) {
    return {
    nome: 'Luiz',
    sobrenome: 'Costa',
    idade: 25
    };

}

const pessoal = Criapessoa('Luiz', 'Costa', 25);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Costa',
    idade: 25,

    fala() {
        console.log(`A minha idade é ${this.idade}`);
    },

    incrementoIdade() {
        this.idade++;
    }
};

pessoal.fala();
pessoal.incrementoIdade();
pessoal.fala();