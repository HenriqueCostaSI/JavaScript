function repetir(agente, multi){
    resultado = [];

for(let i = 0; i<multi ; i++){
    resultado.push(agente);
}
return resultado;

}

function removerPropriedades(obj,propriedade){
    const copia = {...obj}
    delete copia[propriedade]

    return copia;
}

function filtrarNumeros(array){
    let resultado = array.filter((item) => typeof item === 'number' )
    return resultado;
}

function objetosParaArray(objeto){
    const resultado = [];
    const chaves = Object.keys(objeto);

    resultado = chaves.map((chave) => 
        [chave, objeto[chave]]);
    
}

function receberSomenteOsParesDeIndicesPares(array){
    const resultado = [];
     for (let i = 0; i < array.length; i += 2) {
       if (array[i] % 2 === 0){
        resultado.push(array[i]);
       }
     }
return resultado;
}

function checarAnoBissexto(ano){
    return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);
};


somarNumeros(array){
    let resultado = [];
    array.forEach(x => resultado = resultado + x);
    return resultado;
};

despesasTotais(despesas){
    let resultado = 0;
    despesas.preco.forEach(x => resultado += x);
    return `R$ ${resultado.toFixed(2)}`;
};

despesasTotais(despesas){
    let resultado = 0;
    despesas.reduce((resultado, despesa) => resultado + despesa.preco, 0);
};

function calcularMedia(array){
    let resultado = 0;
    array.forEach(x => resultado += x);
    return resultado / array.length;
}

function menorNumero(array){
    let menor = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i];
        }
    }
    return menor;
}

function maiorNumero(array){
    let resultado = array[0];
    
    
    for(let i = 0; i < array.length; i++){
        if(array[i] > resultado){
            resultado = array[i];
        }
    }
    const indiceMaior = array.indexOf(resultado);
    //novoArray = array.filter((item) => item !== resultado) ;

    array.splice(indiceMaior, 1);

    //novoArray 

    for(let i = 0; i < array.length; i++){
        if(array[i] > resultado){
            segundo = array[i];
        }
    }
    return segundo;
}
    


console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));