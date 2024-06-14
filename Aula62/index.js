//IIFE - Immediately Invoked Function Expression

(function (idade, peso , altura) {
    const sobrenome = 'Silva';
    function nomeCompleto(nome) {
        return nome +'' + sobrenome;
    }
   
    function falaNome(){
        console.log(nomeCompleto('Vinicius'));
    }

    falaNome();

    console.log(idade, peso, altura);

})(30, 80, 1.80);   
