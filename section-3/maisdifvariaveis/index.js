let num = 2
//let num = 4 //let nao pode ser redeclarado
num = 3

//let tem escopo de bloco {...bloco}`
//var tem escopo de função 

const verdadeira = true
let nome = 'marlo' //criando 
var nome2 = 'deivid' //criando 

if (verdadeira) {
    let nome = 'santos' //criando - caso no bloco da frente nao tivesse uma let nome, seria exibido esse
    var nome2 = 'pedro' //redeclarando a var nome2
    // console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'serafim' //criando 
        var nome2 = 'joao' //redeclarando a var nome2
        //console.log(nome, nome2) // a let "nome" vai ser porcurado primeiramente no bloco atual, nao encontrando, vai movendo um bloco para trás
    }
}

console.log(nome2)