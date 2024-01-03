function multiplicarTresNumeros(x,y,z) {
    return x * y * z
}

console.log(multiplicarTresNumeros(2,2,4))

const mult = multiplicarTresNumeros(4,2,8)

console.log(`O valor de mult é: ${mult}`)

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log('Pode dirigir.')
    } else {
        console.log('Não pode dirigir.')
    }
}

podeDirigir(19,true)
podeDirigir(47, true)
podeDirigir(19, 0)
podeDirigir(17,0)
podeDirigir(18, 1)