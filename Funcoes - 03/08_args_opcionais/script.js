function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log('Esta função precisa ter os dois argumentos')
    } else {
        return console.log(a + b)
    }
}

soma(4, 4)
soma(4, 0)
soma(4)
soma(4, undefined)
soma(4, null)

function saudacao(nome, idade) {
    if (idade == undefined) {
        console.log(`Olá, ${nome}`)
    } else {
        console.log(`Olá, ${nome} você tem ${idade} anos.`)
    }
}

saudacao('Ruan')
saudacao('Ruan', 19)
