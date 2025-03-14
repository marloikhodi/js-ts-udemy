const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' },
]

const container = document.querySelector(".container")
const div = document.createElement('div') //criado uma div dentro da const div

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    let tagCriada = document.createElement(tag) //insere a tag do elementos em uma let
    let textoCriado = document.createTextNode(texto) //insere o texto do elementos em uma let
    tagCriada.appendChild(textoCriado) //appendChild, transforma o item em () como filho do pre . com isso, é criado o HTML
    div.appendChild(tagCriada) //junta tudo criado na linha de cima, dentro da const div
}

container.appendChild(div)