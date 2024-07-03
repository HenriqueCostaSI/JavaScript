function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg!=='string'){
                reject(new Error('Mensagem precisa ser uma string'));
                return;
            }
            resolve(msg.toUpercase() + '!');
            return;
        }, tempo);
       
    });
}

//Promise.all - espera todas as promises serem resolvidas
const promises = [
    esperar('Promise 1', rand(1, 5)),
    esperar('Promise 2', 1),
    esperar('Promise 3', rand(1, 5)),
    esperar(1000,1000)
    
];
Promise.all(promises).then(values => {
    console.log(values);
}).catch(function(error){
    console.log(error);
})
//Promise.race - espera a primeira promise ser resolvida ou valor
Promise.race(promises).then(values => {
    console.log(values);
}).catch(function(error){
    console.log(error);
})
//Promise.resolve - resolve uma promise

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em cache');
    } else {
        return Promise.reject('Pagina não em cache');
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(function(error){
    console.log(error);
})