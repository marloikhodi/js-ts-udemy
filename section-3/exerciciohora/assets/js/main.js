const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
    return diasSemana[diaSemana]
}

function getNomeMes(numMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numMes]
}

function adcionaZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${adcionaZero(data.getHours())}:${adcionaZero(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data);

// const opcoes = {
//     dateStyle: "full",
//     timeStyle: "short",
// };
// h1.innerHTML = data.toLocaleDateString("pt-BR", { dateStyle: "full" });
