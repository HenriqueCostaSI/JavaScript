const technologies = new Map()//cria um map
technologies.set('react', { framework: false })
technologies.set('angular', { framework: true })

console.log(technologies.react)//undefined
console.log(technologies.get('react').framework)//false

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))//se tem o valor 123
console.log(chavesVariadas.delete(123))//deleta o valor 123
console.log(chavesVariadas.has(123))//false
console.log(chavesVariadas.size)//tamanho do map

chavesVariadas.set(123, "a")
chavesVariadas.set(123, "b")
//nao aceita repeticoes
