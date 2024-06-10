const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', iniciarRelogio(){
    relogio.innerHtml ='relogio iniciado';
});

pausar.addEventListener('click', pausarRelogio(){
    relogio.innerHtml ='relogio pausado';
});

zerar.addEventListener('click', zerarRelogio(){
    relogio.innerHtml ='relogio zerado';
});