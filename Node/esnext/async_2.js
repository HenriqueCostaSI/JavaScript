const { reject } = require("async");

function gerarNumeroEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Rejeitado");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdNumeros) {
  const numeros = [];
  for (let _ of Array(qtdNumeros).fill()) {
    try {
      numeros.push(await gerarNumeroEntre(1, 60, numeros));
    } catch (e) {
      throw e;
    }
  }
  return numeros;
}

gerarMegaSena(7).then(console.log).catch(console.log);

gerarNumeroEntre(1, 60, [1, 6, 37, 21]).then(console.log).catch(console.log);
