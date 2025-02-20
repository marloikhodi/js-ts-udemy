let num = 2
//let num = 4 //let nao pode ser redeclarado
num = 3

//let tem escopo de bloco {...bloco}`
//var tem escopo de função (quando inserido, sempre esta sendo alterado)

const verdadeira = true
let nome = 'marlo' // criando 
var nome2 = 'deivid' // criando 

if (verdadeira) {
    let nome = 'santos' // criando - caso no bloco da frente nao tivesse uma let nome, seria exibido esse
    var nome2 = 'pedro' // redeclarando a var nome2
    // console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'serafim' // criando 
        var nome2 = 'joao' // redeclarando a var nome2
        // console.log(nome, nome2) // a let "nome" vai ser porcurado primeiramente no bloco atual, nao encontrando, vai movendo um bloco para trás
    }
}

console.log(nome2)

var falaBomDia = 'bom dia!'
function falaOi() {
    // var oi = 'oi'
    // console.log(oi)
    console.log(falaBomDia) // o var falaBomDia é exibido pois a function reconhece a varque está fora do seu escopo
}

// console.log(oi) // nao exibe o var, pois o "var oi" está protejido pela função
falaOi()

console.log(varDepois) //*undefined, a engine do JS eleva os VAR e FUNCTION sendo carregado antes do script, e quando solicitado adiciona valor, por esse motivo o return de undefined
var varDepois = 'xisde'