/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptors(o, 'prop')
... (spread)

/Já vimos
Objects.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define  varias propriedades)
Object.defineProperty (define uma propriedade)

*/

const produto = { nome: "Notebook", preco: 2499, desconto: 0.15 };
const caneta = {
  ...produto,
  material: "Plástico",
};
Object.freeze(produto);

const outro = Object.assign({}, produto, { preco: 10 });

produto.nome = "Celular";
caneta.nome = "Caneta";
caneta.preco = 10;

console.log(caneta);
console.log(produto);

console.log(Object.keys(produto));
console.log(Object.getOwnPropertyDescriptors(produto, 'nome'));

Object.defineProperty(caneta, 'nome', {
  writable: True,
  configurable: false,
  value: 'Caneta'
});

for(let [chave, valor] of Object.entries(produto)) {
    return (chave,valor)
}
