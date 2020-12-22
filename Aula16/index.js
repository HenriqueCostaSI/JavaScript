//String, number, undefined, null, boolean, symbol
const nome = 'henrique' //String of
const num1 = 10 ;// number
const num2 = 10.98; // number
let nomeAluno; // undefined -> não aponta para nenhum local na memoria
let sobreNome = null ;// Nulo -> definido pelo programador
const aprovado = true ;// boolean

console.log (typeof nome, sobreNome);

//Passsagem por referencia

let a = [1,2];
let b = a;

b.push(3);
console.log(a,b);