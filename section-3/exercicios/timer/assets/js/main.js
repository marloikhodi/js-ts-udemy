function relogio() {
    function criaHoraSegundos(second) {
        const data = new Date(second * 1000)
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const relogio = document.querySelector('.relogio')
    let segundos = 0
    let timer;

    function iniciaRelogio() {
        timer = setInterval(() => { segundos++; relogio.innerHTML = criaHoraSegundos(segundos) }, 1000)
    }

    document.addEventListener('click', (e) => {
        const el = e.target
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer) // zera para garantir que nao possui dois timers
            iniciaRelogio()
        }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer)
        }
        if (el.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.classList.remove('pausado')
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })
}

relogio()
