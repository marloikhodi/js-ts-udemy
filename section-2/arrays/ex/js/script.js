function meuEscopo() { //removendo o codigo do escopo global
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = [] //setando o array que recebera os objetos 

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert('foi enviado');
    //     console.log("foi enviado")
    // }
    // let contador = 1
    function recebeEventoForm(evento) {
        evento.preventDefault()
        // console.log(`Form não enviado, tentativa número ${contador}`)
        // contador++
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({ //formaçao do objeto com os valores do html
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas) //print do array formado junto com os objetos 

        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value} <br> Peso: ${peso.value} <br> Altura: ${altura.value}</p>`
    }
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()

//xd