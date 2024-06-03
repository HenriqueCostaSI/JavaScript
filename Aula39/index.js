function verificarDiaSemana(diaSemana) {
    switch (diaSemana) {
      case 0:
        return "domingo";
      case 1:
        return "segunda";
      case 2:
        return "terça";
      case 3:
        return "quarta";
      case 4:
        return "quinta";
      case 5:
        return "sexta";
      case 6:
        return "sábado";
      default:
        return "dia inválido";
    }
  }
const data = new Date("1987-04-21 00:00:00");
const diaSemana1 = data.getDay();
let diaSemanaTexto = verificarDiaSemana(diaSemana1);

console.log(diaSemanaTexto , diaSemana1);
// if (diaSemana === 0) {
//     console.log('Domingo');
// } (diaSemana === 1) {
//     console.log('Segunda');
// } (diaSemana === 2) {
//     console.log('Terça');
// } (diaSemana === 3) {
//     console.log('Quarta');
// } (diaSemana === 4) {
//     console.log('Quinta');
// } (diaSemana === 5) {
//     console.log('Sexta');
// } (diaSemana === 6) {
//     console.log('Sábado');
// } else {
//     console.log('Dia inválido');
// }


