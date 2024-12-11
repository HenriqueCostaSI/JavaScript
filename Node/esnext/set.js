//um conjunto nao indexado e nao aceita repeticao

const times = new Set()
times.add("Sao Paulo")
times.add("Flamengo").add("Vasco").add('Sao Paulo')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))//true
times.delete('Flamengo')
console.log(times.has('Flamengo'))//false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)//Set(3) {"Raquel", "Lucas", "Julia"}