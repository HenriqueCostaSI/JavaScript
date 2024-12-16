function esperarPor(tempo = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
};


/* esperarPor()
    .then(() => console.log('Executando promise 1...'));
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'));
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'));

     */
    

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(2), 2000);
    });
}

async function executar() {

    let valor = await retornarValor();

    await esperarPor();
    console.log('Executando promise 1...', valor);
    await esperarPor();
    console.log('Executando promise 2...', valor + 1);
    await esperarPor();
    console.log('Executando promise 3...', valor + 2);

    return valor;
}

async 

executar().then(valor => console.log(`Valor final: ${valor}`));