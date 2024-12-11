//let e const
{
    let a = 3
    var b = 4
}
//console.log(a)//ReferenceError: a is not defined
console.log(b)//4

//Template String
const produto = 'iPad'
console.log(`Produto: ${produto}
                    `);

//destructuring
const [l, e, ...resto] = 'Leonardo'
console.log(l, e, resto);

const [x, , z] = [1, 2, 3];

const { nome: r, idade } = { nome: 'Ana', idade: 20 };

//arrow function
const soma = (a, b) => a + b//anonymous function
console.log(soma(2, 3));

const diference = (a, b) => {
    const result = a - b
    return result
}

//Arrow function e this
const lexico1 = () => console.log(this === exports)//aponta para o objeto global
const lexico2 = lexico1.bind({})//bind() cria uma nova função com o this definido
lexico1()//true
lexico2()//true

//Parametros default
function log(texto = 'Node') {
    console.log(texto)
}
log()//Node
log(null)//null
log(undefined)//Node
logg('Sou mais forte')//Sou mais forte

//Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5));

//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj));//[1, 2, 3]
console.log(Object.entries(obj));//[['a', 1], ['b', 2], ['c', 3]]

//Melhorias na notação literal  
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola());//Carla Oi gente!

//Class
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar());//Au au!