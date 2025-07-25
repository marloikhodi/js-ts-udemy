const nome = "nome"

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'nome2'
    falaNome()
}

usaFalaNome()