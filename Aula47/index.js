//for in -> le os indices ou chaves de um objeto

// const frutas = ['maça', 'banana', 'uva']

// for(let i in frutas) {
//     console.log(frutas[i])
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 25
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let atributo in pessoa) {
    console.log(atributo, pessoa[atributo])
}