function Pessoa(nome, sobrenome) {

    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => { console.log(`Me chamo ${this.nome}`) }
}

const p1 = new Pessoa('Luiz', 'sd')
const p2 = new Pessoa('Marlo', 'sd')

console.log(p1.nome, p2)
p2.metodo()