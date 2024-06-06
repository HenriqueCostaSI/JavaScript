const pessoa = {
    nome: 'Luiz',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        cidade: 'São Paulo',
        uf: 'SP',
        pais: 'Brasil'
    }
};

//Atribuição via desestruturação
const { nome: n = '', ...rest} = pessoa;
console.log(nome, rest);

const  { endereco: { cidade, uf } } = pessoa;
console.log(cidade, uf, endereco);