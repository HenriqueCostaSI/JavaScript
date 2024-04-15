//Capturar o evento de submit do formulario

const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value) / 100;

    if (!peso) {
        resultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        resultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classificacao = classificacaoImc(imc);

    const msg = `Seu IMC é ${imc} (${classificacao}).`;

    resultado(msg, true);
});

function getImc(peso, altura) {
    console.log(`Peso: ${peso}, Altura: ${altura}`);
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function classificacaoImc(imc) {
    let classificacao;

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal';
    }
    else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade grau 1';
    } else if
        (imc >= 35 && imc < 40) {
            classificacao = 'Obesidade grau 2';
        }
    else {
            classificacao = 'Obesidade grau 3';
        }
    return classificacao;
    
    }  

function createP(){
    const p = document.createElement('p');

    return p;
}

function resultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = createP();

    if (isValid) {  
        p.classList.add('paragrafo-resultado');
    } else { 
        p.classList.add('bad');
    }

    
    p.innerHTML = msg;
    resultado.appendChild(p);

}