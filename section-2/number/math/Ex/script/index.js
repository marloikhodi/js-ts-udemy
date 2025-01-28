const numeroPrompt = prompt('Digite um numero')
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')
const numero = Number(numeroPrompt)

numeroTitulo.innerHTML = numeroPrompt
texto.innerHTML = `
<p>Raiz quadrada: ${Math.sqrt(numero)}</p>
<p><span></span> é inteiro? ${Number.isInteger(numero)}</p>
<p>é NaN? ${Number.isNaN(numero)}</p>
<p>Arredondado para baixo: ${Math.ceil(numero)}</p>
<p>Arredondado para cima: ${Math.floor(numero)}</p>
<p>Com duas casas deciamais: ${numero.toFixed(2)}</p> 
`
// .sqrt calcula a raiz quadrada
// .isInteger verifica se é inteiro (sem decimais)
// .isNan verifica se é ou nao um NaN retornando boolean
// .ceil arredonda para cima
// .floor arredonda para baixo
// .toFixed limita casas decimais