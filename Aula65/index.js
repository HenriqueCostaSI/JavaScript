//funcoes geradoras

function* gerador() {
    yield 1;
    yield 2;
    yield 3;
}


const g1= gerador();
console.log(g1.next().value);

// for (let valor of g1) {
//     console.log(valor);
// }

function* gerador2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function gerador3() {
    yield 0;
    yield 1;
    yield 2;
}


function* gerador4() {
    yield* gerador3();
    yield 3;
    yield 4;
    yield 5;
}


const g4 = gerador4();


function gerador5() {
    yield function (){
        console.log('Executando o callback1');
    };

    return function (){
        console.log('Executando o return');
    };

    yield function (){
        console.log('Executando o callback2'); //Unreachable code detected
    };
}

const g5 = gerador5();
const callback1 = g5.next().value;
const callback2 = g5.next().value;
const callback3 = g5.next().value;
callback1();
callback2();