const verdadeira = true;

// Let tem escopo de bloco { .......}
// Var tem escopo global

let nome = 'João';
var nome2 = 'Maria';

if (verdadeira) {
    let nome = 'José';
    var nome2 = 'Pedro'; //redeclarando
    console.log(nome);

    if (verdadeira) {
        let nome = 'henrique';
        console.log(nome, nome);
    }
}