export const nome = 'Luiz';
export const sobrenome = 'Otávio';
export const idade = 25;

export  function soma(a, b) {
    return a + b;
}

export default (x, y) => x * y;
export class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

const cpf = '123.456.789-10';


//exportando recursos
// export { nome, sobrenome as sobrenome2, idade, soma as default };