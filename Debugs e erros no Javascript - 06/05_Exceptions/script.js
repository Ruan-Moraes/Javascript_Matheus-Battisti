function saudacao(nome) {
    if (typeof nome != 'string') {
        throw new Error('O parãmetro nome precisa ser String')
    } else {
        console.log(`Olá ${nome}.`)
    }
}

saudacao('Matheus')
saudacao(5)

console.log('teste')
