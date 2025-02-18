function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto; // or break
        case 1:
            diaSemanaTexto = "Segunda";
            return diaSemanaTexto; // or break
        case 2:
            diaSemanaTexto = "Terça";
            return diaSemanaTexto; // or break
        case 3:
            diaSemanaTexto = "Quarta";
            return diaSemanaTexto; // or break
        case 4:
            diaSemanaTexto = "Quinta";
            return diaSemanaTexto; // or break
        case 5:
            diaSemanaTexto = "Sexta";
            return diaSemanaTexto; // or break
        case 6:
            diaSemanaTexto = "Sabado";
            return diaSemanaTexto; // or break
        default:
            diaSemanaTexto = "";
    }
}

const data = new Date("2004-04-13 00:00:00");
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);
