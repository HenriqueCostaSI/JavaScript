//Revisao
// const pessoa = {
//   nome: "Luiz",
//   sobrenome: "Miranda",
// };

// console.log(pessoa.nome);
// console.log(pessoa["sobrenome"]);

// const pessoa1 = new Object();
// pessoa1.nome = "Henrique";
// pessoa1.sobrenome = "Matheus";
// pessoa1.idade = 23;
// pessoa1.falarNome = function () {
//   console.log(`${this.nome} está falando seu nome`);
// };

// pessoa1.getDataNascimento = function () {
//   const dataAtual = new Date();
//   console.log(dataAtual)
//   return dataAtual.getFullYear() - this.idade;
// };

// delete pessoa1.nome;
// console.log(pessoa1);
// console.log(pessoa1.getDataNascimento())

// for (let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }



//Factory Functions / Constructor Functions / Classes

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa("Henrique", "Matheus");
console.log(p1.nomeCompleto);

//Constructor function

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Object.freze(this)

    //return this
}

// p2 = Endereco de memoria -> Valor
const p2 = new Pessoa("Henrique", "Matheus"); // new cria um objeto vazio e o this vai atribuir os valores a ele
