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
