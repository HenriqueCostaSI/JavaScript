//função construtora -> objetos
//função fabrica -> objetos
//Construtora -> Usa-se letra Maiuscula e a palavra new
//new -> Cria um objeto vazio e faz o this apontar para esse objeto e retorna
function Pessoa(nome, idade) {
    
    //Atributos Privados
    const ID = 123;

    const metodoInterno = () => {
        console.log('Executando o metodo interno');
    };

    //Métodos Públicos
    this.nome = nome;
    this.idade = idade;


    this.metodo = () => {
        console.log('Executando o metodo do objeto ' + this.nome);
    };


}

const p1 = new Pessoa('Luiz', 23)
const p2 = new Pessoa('João', 52)

console.log(p1.idade);
