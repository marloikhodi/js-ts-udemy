function criaCalc() {
    return {
        display: document.querySelector('.display'),


        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },
        clearDisplay() {
            this.display.value = ''
        },

        delUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value
            try {
                conta = eval(conta)

                if (!conta) {
                    alert(`Conta Invalida!`)
                    return
                }

                this.display.value = String(conta)
            } catch (e) { alert(`Conta Invalida!`) }
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)

                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')) {
                    this.delUm()
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            })
        },

        btnParaDisplay(digitos) {
            this.display.value += digitos
        },
    }

}

const calculadora = criaCalc()
calculadora.inicia()