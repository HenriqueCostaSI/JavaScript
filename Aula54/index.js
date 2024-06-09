function somar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('ERRO: Os parâmetros precisam ser números');
    }

    return a + b
}

try {
    console.log(somar(1, 2));
    console.log(somar('a', 'b'));
} catch (error) {
    //console.log(error);
    console.log(error.message);
}