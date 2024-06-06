
// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//const [primeiroNumero, segundoNumero, ...rest] = numeros;
const [ um, , tres, ,cinco, ,sete ] = number;

console.log(um, tres);


////////////////////////////////////////////////////////
//                   0             1         2
//                  0,1,2      0,1,2        0,1,2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const[,[,,seis]] = numeros; // atribuicao via desestruturacao

console.log(numeros[1][0]);