function soma(a,b){
    return a + b;
}
console.log(soma(1,2));

function criaPessoa(nome, sobrenome, idade) {
    return { nome1: nome, sobrenome1: sobrenome, idade1: idade };
}

const p1 = criaPessoa('Maria', 'Silva', 25);
console.log(typeof p1);


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
console.log(fala('Mundo!'));

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n) {
        return n * multiplicador;
    }
}

const duplicador = criaMultiplicador(2);
const triplicador = criaMultiplicador(3);
const quadrador = criaMultiplicador(4); 

console.log(duplicador(2));
console.log(triplicador(2));