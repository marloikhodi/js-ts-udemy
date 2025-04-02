//declarar função (function hoisting)
falaOi()
function falaOi() { //first-class objects (objetos de primeira) - a função pode ser criada como um dado
    //funções declaradas dessa maneira sao prioridades no carregamento do motor JS, permitindo elas serem chamadas antes de serem feitas
    console.log('Oie')
}
//console.log(func()) //nao funciona antes de ser declarado 
const func = () => { return 'oi' }
console.log(func())

//fuction expression
const souUmDado = function () {
    console.log('Sou um Dado')
}
//souUmDado() //Mesmo sendo criado como constate, pode ser executado como uma função (por isso trata a função como dado)
// isso é bom pois posso fazer outra função executar essa função

function executaFuncao(funcao) {
    funcao()
}

executaFuncao(souUmDado)