function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: true, //pode alterar ou nao
        configurable: false //pode reconfigurar a chave (refazer o .defineProperty)
    })
}