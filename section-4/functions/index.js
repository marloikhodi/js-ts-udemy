//declarar função (function hoisting)
falaOi()
function falaOi() {
    //funções declaradas dessa maneira sao prioridades no carregamento do motor JS, permitindo elas serem chamadas antes de serem feitas
    console.log('Oie')
}
