//escopo lexico

const nome ='maria';

function fala(nome) {
    console.log(`Olá ${nome}`);
}

function usarNome(nome) {

    nome = 'joao';
    fala(nome);
}
usarNome('joao');

//closures

function retornaFuncao(nome){
    
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Maria')
console.dir(funcao);
console.dir(funcao2);