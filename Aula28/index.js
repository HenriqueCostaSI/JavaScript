const array = [1, "luiz", true, null, 23.324];
console.log(array);
console.log(array instanceof Array);


//array.push('Henrique');
array.unshift('Luiza');//adiciona no começo

delete array[4];

console.log(array);

console.log(array.slice(0, -1));