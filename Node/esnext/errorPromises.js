function funcionarOuNao(valor, chanceErro) {
   return new Promise((resolve, reject) => {
      if (Math.random() < chanceErro) {
         reject('Ocorreu um erro')
      } else {
         resolve(valor)
      }
   })
}

funcionarOuNao('...', 0.9)
   .then(valor => console.log('Sucesso: ', valor))
   .then(
    v => console.log('Valor: ', v),
    err => console.log('Erro: ', err)
   )
   .then(console.log('Quase final'))
   .catch(err => console.log('Erro geral: ', err))