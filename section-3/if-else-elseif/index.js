const hora = 23

if (hora >=0 && hora <=5){
    console.log('boa madrugada!')
}
else if (hora >= 6 && hora <=11 ){
    console.log('bom dia!')
}
else if (hora >=12 && hora <=17) {
    console.log('boa tarde!')
}
else if (hora >=18 && hora <= 23 ) {
    console.log('boa noite!')
}
else{
    console.log('horario indevido')
}

const tenhoGrana = true
tenhoGrana ? console.log('vou sair de casa') : console.log('nao vou sair de casa')