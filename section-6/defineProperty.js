//DefineProperty & DefineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome
    Object.defineProperty(this, "preco", {
        enumerable: false,
        value: () => preco,
        writable: true,
        configurable: false
    })

    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: true, //pode alterar ou nao
        configurable: false //pode reconfigurar a chave (refazer o .defineProperty)
    })
}

const produto01 = new Produto("Camisa", 20, 3)
produto01.estoque = 300
delete produto01.estoque //impedido pelo configurable: false
// console.log(produto01)
// console.log(produto01.preco())
// console.log(Object.keys(produto01)) //nao mostra a chave preco pois está enumerable: false

function Produtos(nome, preco, estoque) {
    this.nome = nome
    Object.defineProperty(this, "preco", {
        enumerable: true,
        value: () => preco,
        writable: true,
        configurable: false
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: false
        }
    })
}

const produto02 = new Produtos('Short', 30, 1)
// console.log(produto02)
// console.log(produto02.preco())
// console.log(Object.keys(produto02))