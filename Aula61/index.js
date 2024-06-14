function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// Chama f1 com a função de callback f1Callback
f1(f1Callback);

function f1Callback() {
    // Chama f2 com a função de callback f2Callback
    f2(f2Callback);
}

function f2Callback() {
    // Chama f3 com a função de callback f3Callback
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}
