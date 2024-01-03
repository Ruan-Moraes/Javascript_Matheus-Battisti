function imprimirConsole() {
    console.log('Olá, mundo!')
}

imprimirConsole()

function imprimirComNumero(number) {
    console.log(`O número é ${number}`)
}

imprimirComNumero(7)
imprimirComNumero(14)
imprimirComNumero(21)
imprimirComNumero(28)

const numeroAleatorio = function() {
    console.log(Math.random())
} 

console.log(numeroAleatorio())