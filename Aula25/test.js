//IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

console.log(num1 + num2);

num1 += num2; // num1 = num1 + num2
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toFixed(4));
//console.log(Number.isInteger(num2));
