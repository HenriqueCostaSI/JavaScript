const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo) 

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')//Imprime uma mensagem
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {//Quando o usuário digitar algo
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })    
}