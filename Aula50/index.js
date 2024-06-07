function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}


console.log(rand);

const min = 1;
const max = 80;
let rand = 10;

while( rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

do {
    rand = random(min, max);
    console.log(rand);
} while( rand !== 10);