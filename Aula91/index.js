function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg!=='string'){
            reject(new Error('Mensagem precisa ser uma string'));
        }
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperar('Executando 1', rand(1, 5))
.then(resposta => {
    console.log(resposta);
    return esperar('Executando 2', rand(1, 5));
}).then(resposta => {
    console.log(resposta);
    return esperar('Executando 3', rand(1, 5));
}).then(resposta => {
    console.log(resposta);
}).then(resposta => {
    console.log('último a ser exibido');
})
.catch(erro => {
    console.log(erro);
})


console.log('Será exibido antes do final da Promise');