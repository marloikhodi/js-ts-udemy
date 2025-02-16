// const data = new Date(0) //01/01/1970 Timestamp unix ou época unix (seria o marco 0)
// const tresHoras = 60 * 60 * 3 * 1000
// const dateAtt = new Date(0 + tresHoras)
// console.log(data)
// console.log(dateAtt.toString())
//const data = new Date(2004, 3, 13, 9, 10, 30, 600) // Ano, Mes, Dia, Hora, Minuto, Segundo, Milesimo de segundo (999) => cada valor é atualizado caso passe de seu limite, sendo obrigatorio somente ano e mes
const data = new Date('2004-04-13T09:10:30.600') // Ano, Mes, Dia, Hora, Minuto, Segundo, Milesimo de segundo (999)
console.log(`Dia`, data.getDate())
console.log(`Mes`, data.getMonth() + 1) // Mes começa do 0
console.log(`Ano`, data.getFullYear())
console.log(`Hora`, data.getHours())
console.log(`Min`, data.getMinutes())
console.log(`Seg`, data.getSeconds())
console.log(`Ms`, data.getMilliseconds())
console.log(`Dia Semana`, data.getDay()) // 0 - Domingo, 6 - Sabado
console.log(data.toString())
console.log(Date.now()) //1739668913357 contagem em milesimo de segundo 

function adcionaZero(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = adcionaZero(data.getDate())
    const mes = adcionaZero(data.getMonth() + 1)
    const ano = data.getFullYear()
    const hora = adcionaZero(data.getHours())
    const min = adcionaZero(data.getMinutes())
    const sec = adcionaZero(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const dataAtual = new Date()
const dataBrasil = formataData(dataAtual)
console.log(dataBrasil)