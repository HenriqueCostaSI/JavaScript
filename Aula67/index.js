//               -5       -4      -3       -2         -1
//               0         1       2        3          4
const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz'];

//nomes.splice(indice,delete,elem1,elem2,elem3...)

//pop
let removidos = nomes.splice(-1,1);//retorna um array com os elementos removidos

//shift
removidos = nomes.splice(0,1);

//push
nomes.splice(nomes.length,0,'Rodrigo');//adiciona elementos no array

//unshift
nomes.splice(0,0, 'Mario', 'Luiz');//adiciona elementos no array

console.log(nomes, removidos);