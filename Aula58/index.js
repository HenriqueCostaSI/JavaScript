function somarArgumentos() {
    let total = 0;
    for (let argumento in arguments) {
        total += Number(argumento);
    }
    return total;
}

const resultado = somarArgumentos( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`Soma de argumentos:${resultado}`);

//argumentos que sustenta todos os argumentos enviados

function funcao2(a, b =2, c=3) {
    console.log( a + b + c);
}

funcao2( 2, undefined, 10 );

function funcao3({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 25
}

funcao3(obj);

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') {
            acumulador += numero;
        } else if(operador === '-') {
            acumulador -= numero;
        } else if(operador === '*') {
            acumulador *= numero;
        } else if(operador === '/') {
            acumulador /= numero;
        } else {
            console.log('Operador inválido');
        }
    }
}   
conta('+', 4, 5, 6, 7, 8, 9, 10);