const contadorA = require("./instanciaIUnica");
const contadorB = require("./instanciaIUnica");

const contadoC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

contadorA.inc();
contadorA.inc();

console.log(contadorB.valor);

contadoC.inc();
contadoC.inc();

console.log(contadorD.valor);
