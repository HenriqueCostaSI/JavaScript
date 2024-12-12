let a = 1;

let p = new Promise(function (resolve) {
  resolve(["ana", "maria", "joao"]);
});

function primeiroElemento(array) {
  return array[0];
}
const primeiraLetra = string => string[0];

p.then(primeiroElemento)
  .then(primeiraLetra)
  .then((letra) => letra.toLowerCase())
  .then(console.log);
