const axios = require('axios');


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

    console.log(func)
});

// Desafio: Encontrar a mulher chinesa com menor salário

const chineses = funcionarios => funcionarios.pais === 'China';
const mulheres = funcionarios => funcionarios.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}



function menorSalarioChinesa(funcionarios) {

    let funcionarioAtual = null;
    
    if( funcionarios.pais === 'China' && funcionarios.genero === 'F') {
        for (funcionarioAtual of funcionarios) {
            if(funcionarios.salario < funcionarioAtual.salario) {
                funcionarioAtual = funcionarios[i]
            }
        }
    } else {
        return 'Não há mulheres chinesas'
    }
    return funcionarioAtual;
}
const mulheresChinesas = funcionarios.filter((e)=> e.pais === 'China' && e.genero === 'F');
console.log(mulheresChinesas);