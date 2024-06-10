function relogio() {
    function criaHoraDosSegundos(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
      });
    }


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(e){
    relogio.classList.add('pausado');
    clearInterval(timer);
});
zerar.addEventListener('click', function(e){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});

//Outra solucao MELHOR

//document.addEventListener('click', function(e) {
//     const elemento = e.target;

//     if (elemento.classList.contains('zerar')) {
//       clearInterval(timer);
//       relogio.innerHTML = '00:00:00';
//       relogio.classList.remove('pausado');
//       segundos = 0;
//     }

//     if (elemento.classList.contains('iniciar')) {
//       relogio.classList.remove('pausado');
//       clearInterval(timer);
//       iniciaRelogio();
//     }

//     if (elemento.classList.contains('pausar')) {
//       clearInterval(timer);
//       relogio.classList.add('pausado');
//     }
//   });
// }
// relogio()