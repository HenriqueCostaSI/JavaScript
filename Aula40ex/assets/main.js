
const h1 = document.querySelector('.container h1');
const currentDate = new Date();

const dateString = currentDate.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

const timeString = currentDate.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
});

h1.innerHTML = `${dateString}, ${timeString}`;

// function verificarDiaSemana(diaSemana) {
//     switch (diaSemana) {
//       case 0:
//         return "domingo";
//       case 1:
//         return "segunda";
//       case 2:
//         return "terça";
//       case 3:
//         return "quarta";
//       case 4:
//         return "quinta";
//       case 5:
//         return "sexta";
//       case 6:
//         return "sábado";
//       default:
//         return "dia inválido";
//     }
// }

// function verificarMes(mes) {
//     switch (mes) {
//         case 0:
//             return "janeiro";
//         case 1:
//             return "fevereiro";
//         case 2:
//             return "março";
//         case 3:
//             return "abril";
//         case 4:
//             return "maio";
//         case 5:
//             return "junho";
//         case 6:
//             return "julho";
//         case 7:
//             return "agosto";
//         case 8:
//             return "setembro";
//         case 9:
//             return "outubro";
//         case 10:
//             return "novembro";
//         case 11:
//             return "dezembro";
//         default:
//             return "mês inválido";
//     }
// }


  
// h1.innerHTML = `Hoje é ${verificarDiaSemana(data.getDay())}, ${data.getDate()} de ${verificarMes(data.getMonth())} de ${data.getFullYear()}`;
