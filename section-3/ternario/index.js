// utilizando o ? e : realiza a substituição de um if else

const pontuacaoUsuario = 1001
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario)

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}

//ambas realizam a mesma função