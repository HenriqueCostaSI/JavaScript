//declaração de função (function hosting)
falOi();
function falOi() {
    console.log('oi')
}

//first-class objects (Objetos de primeira classe)
//function expression

const souUmDado = function() {
    console.log('sou um dado')
}


function exucutaFuncao(funcao) {
    console.log('executando função');
    funcao();
}

executaFuncao(souUmDado);

//arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function')
};
funcaoArrow();

setInterval(function() {
    console.log('executando função de intervalo')
}, 1000);

//Dentro de um objeto posso ter uma funcao
const obj = {
    falar() {
        console.log('sou uma funcao dentro de um objeto')
    }
};
obj.funcao();