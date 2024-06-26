//Map -> sempre retorna um array com o mesmo numero de elementos do original
//dobre os numeros
const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

const numeresDobrados = numeros.map(function(valor, indece, array) {
    console.log(valor, indece, array);
    return valor * 2;
});



const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
//Retorne apenas uma string com nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
//Remove apenas a chave nome do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade }));
//Adiciona uma chave id em cada objeto
const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj;
});