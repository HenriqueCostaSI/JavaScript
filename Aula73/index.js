const a1 = [10, 22, 33, 54, 6, 643, 3];

// for (let valor of a1) {
//   console.log(valor);
// }

a1.forEach(function (valor, indice, array) {
  console.log(valor, indice);
});

let total = 0;  
a1.forEach(valor => {
    total += valor;
});

let total2 = a1.reduce(function(ac , valor){
    return ac + valor;
});
console.log(total);
console.log(total2);
