//Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);


// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//   console.log(valor, indice, array);
//   return valor > 10;
// });

//const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
//retorna as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//retorna pessoas com mais de 50 anos
const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
//retorna as pessoas cujo o nome termina com a
const pessoasQueTerminamComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe50Anos);
console.log(pessoasQueTerminamComA);