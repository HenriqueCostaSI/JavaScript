const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
//const nomes = new Array('Ana', 'Marcos', 'Maria', 'Mauro');
nomes[2] = 'Joao';
delete nomes[2];
console.log(nomes);

//valor por referencia

const nomes1 = ['Marcos', 'Maria', 'Mauro', 'Joao'];
const copia = nomes1;
nomes1.pop();
console.log(copia);


const nomes2 = ['Ana', 'Marcos', 'Maria', 'Mauro'];
let novo = [...nomes2];//cria um novo array isolado

const removido = novo.shift();

nomes2.push('Joao');

novo = nomes1.splice(1, 2);
console.log(novo);

console.log(nomes2);
console.log(novo.length);
console.log(removido);

const palavra = 'Luiz Otavio Miranda';
const palavra2 = palavra.split(' ');
console.log( `Nome: ${palavra2[0]} ,Sobrenome: ${palavra2[1]}`);

const palavra3 = ['Luiz', 'Otavio', 'Miranda'];
let name = palavra3.join(' ');