const numero = Number(prompt('Digite um numero'))
const numeroTitulo = document.getElementsByClassName('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
texto.innerHTML = `
<p>Raiz quadrada: ${Math.sqrt(numero)}</p>
<p><span></span> é inteiro? ${Number.isInteger(numero)}</p>
<p>é NaN? ${Number.isNaN(numero)}</p>
<p>Arredondado para baixo: ${Math.ceil(numero)}</p>
<p>Arredondado para cima: ${Math.floor(numero)}</p>
<p>Com duas casas deciamais: ${numero.toFixed(2)}</p>
`