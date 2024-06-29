// Chaves e Valores: O Map contém pares de chave-valor, e você pode usar qualquer valor (objetos ou tipos primitivos) como chave ou valor.
// Ordem das Chaves: O Map lembra a ordem original da inserção das chaves. Isso significa que as chaves são iteradas na ordem em que foram adicionadas.
// Diferenças em relação a Objetos: Embora o Map e o Objeto permitam definir valores para chaves, remover chaves e verificar se algo está armazenado em uma chave, existem diferenças importantes:
// O Map não contém nenhuma chave por padrão, enquanto o Objeto tem um prototype e contém algumas chaves por padrão.
// As chaves do Map podem ser qualquer valor, enquanto as chaves do Objeto devem ser strings ou símbolos.
// A ordem das chaves no Map é simples e direta, enquanto a ordem das propriedades do Objeto pode ser complexa.
const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
  ];

// const novasPessoas = {};
//   for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
//   }


const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas.get(2));

for (const [identificacion, {id,nome}] of novasPessoas) {
  console.log(indentificacion, id, nome);
}

for (const pessoa of novasPessoas.values()) {
  console.log(pessoa);
}