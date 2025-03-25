function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR')
}

// function atualizaHora() { console.log(mostraHora()) }

// setInterval(atualizaHora, 1000) //seta um intervalo para a exibição, no caso, 1000ms = 1segundo

const timer = setInterval(() => { console.log(mostraHora()) }, 1000)

setTimeout(() => { clearInterval(timer) }, 10000) //diferente da outra, executa com base em um tempo pré setado, no caso foi em 10segundos
