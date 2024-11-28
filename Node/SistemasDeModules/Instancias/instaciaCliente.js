const contadorA = require('./instanciaIUnica');
const contadorB = require('./instanciaIUnica');

const contadoC = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor);