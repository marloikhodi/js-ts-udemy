//"arguments" sustenta todos os argumentos sustentados, mesmo que eu defina valores dentro da funçao "function(a,b,c)" eu ainda posso ler valores adjescentes com o arguments (somente em funcions())

function funcao(a, b, c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total, a, b, c)
}
funcao(1, 2, 3, 4, 5, 6, 7);

function conta(a, b = 2, c = 3) {
    console.log(a + b + c)
}

conta(1, undefined, 4) // retorna 7, sendo 1 + 2 + 4 pois B sendo undefined pega o valor padrao

function objeto({ nome, sobrenome, idade }) { //desistruturação de objeto
    console.log(nome, sobrenome, idade)
}

let obj = { nome: "Deivid", sobrenome: "Marlon", idade: 21 }
objeto(obj)

function array([a, b, c]) { //desistruturação de array
    console.log(a, b, c)
}

arr = ["valor-um", "valor-dois", "valor-tres"]
array(arr)