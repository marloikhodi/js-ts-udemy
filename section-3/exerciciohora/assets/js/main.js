const h1 = document.querySelector(".container h1");
const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = "domingo";
//             return diaSemanaTexto; // or break
//         case 1:
//             diaSemanaTexto = "segunda-feira";
//             return diaSemanaTexto; // or break
//         case 2:
//             diaSemanaTexto = "terça-feira";
//             return diaSemanaTexto; // or break
//         case 3:
//             diaSemanaTexto = "quarta-feira";
//             return diaSemanaTexto; // or break
//         case 4:
//             diaSemanaTexto = "quinta-feira";
//             return diaSemanaTexto; // or break
//         case 5:
//             diaSemanaTexto = "sexta-feira";
//             return diaSemanaTexto; // or break
//         case 6:
//             diaSemanaTexto = "sabado";
//             return diaSemanaTexto; // or break
//         default:
//             diaSemanaTexto = "";
//     }
// }

// function getNomeMes(numMes) {
//     let diaMesTexto;
//     switch (numMes) {
//         case 0:
//             diaMesTexto = "janeiro";
//             return diaMesTexto; // or break
//         case 1:
//             diaMesTexto = "fevereiro";
//             return diaMesTexto; // or break
//         case 2:
//             diaMesTexto = "março";
//             return diaMesTexto; // or break
//         case 3:
//             diaMesTexto = "abril";
//             return diaMesTexto; // or break
//         case 4:
//             diaMesTexto = "maio";
//             return diaMesTexto; // or break
//         case 5:
//             diaMesTexto = "junho";
//             return diaMesTexto; // or break
//         case 6:
//             diaMesTexto = "julho";
//             return diaMesTexto; // or break
//         case 7:
//             diaMesTexto = "agosto";
//             return diaMesTexto; // or break
//         case 8:
//             diaMesTexto = "setembro";
//             return diaMesTexto; // or break
//         case 9:
//             diaMesTexto = "outubro";
//             return diaMesTexto; // or break
//         case 10:
//             diaMesTexto = "novembro";
//             return diaMesTexto; // or break
//         case 11:
//             diaMesTexto = "dezembro";
//             return diaMesTexto; // or break
//         default:
//             diaMesTexto = "";
//     }

// }

// function adcionaZero(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${adcionaZero(data.getHours())}:${adcionaZero(data.getMinutes())}`
//     );
// }

// h1.innerHTML = criaData(data);

const opcoes = {
    dateStyle: "full",
    timeStyle: "short",
};
h1.innerHTML = data.toLocaleDateString("pt-BR", { dateStyle: "full" });
