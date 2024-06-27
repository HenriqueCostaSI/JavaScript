function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,

    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") throw new Error("Estoque deve ser um número");
      estoque = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));
console.log(p1.estoque);


function criaProduto(nome, preco, estoque) {
  return {
    get nome(){
        return nome;
    },
    set nome(valor){
        nome = valor;
    }
}
}

const p2 = criaProduto("Calça", 120, 10);

p2.nome = "Novo nome";
console.log(p2.nome);

