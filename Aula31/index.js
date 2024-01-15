 function saudacao(nome){
    return console.log(`Bom dia, ${nome}`);
 }

 function soma(x = 1 ,y = 2){
    const resultado = x + y;
    return resultado;
 }

 //const test = saudacao("henrique");

 //console.log(soma(234,432));

 ////////////////////////////////////////////////////////////////////////////////////////////////

//FUNÇÃO ANONIMA

const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));

//Arrow function

const raiz2 = n => n ** 0.5;

 

