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
}

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));