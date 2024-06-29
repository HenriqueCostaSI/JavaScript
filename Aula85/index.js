class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

function PessoaConstrutora(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

PessoaConstrutora.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa("Luiz", "Miranda");
const p2 = new PessoaConstrutora("Luiz", "Miranda");
console.log(p1.falar());