//funcao construtora
// const tresHoras = 60*60*3*1000;
// const umDia = 24*60*60*1000;
// const data = new Date(0 + tresHoras + umDia);//01/01/1971 Timestamp unix ou epoca unix, marco zero formado em (ms)

//const data = new Date(2019, 3, 20, 15 , 14 , 27); //ano, mes(começa do 0), dia, hora, minuto, segundo
const data = new Date('2019-04-20 20:20:59');//formato mais utilizado

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundo', data.getMilliseconds());
console.log('Dia da semana', data.getDay());
console.log('Dia da semana string', data.toLocaleDateString('pt-BR'));
console.log(data.toString());

console.log(Date.now());

///////////////////////////////////////////////////////////////////////////////

function fomataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

function zeroAEsquerda(valor) {
    return valor < 10? `0${valor}` : valor;
}