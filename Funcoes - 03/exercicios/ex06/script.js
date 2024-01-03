function analisadorDeTipo(dado) {
    if (typeof dado === 'boolean') {
        console.log('Tipo de dado Boolean')
    } else if (typeof dado === 'number') {
        console.log('Tipo de dado Number')
    } else {
        console.log('Tipo de dado String')
    }
}

analisadorDeTipo(true)
analisadorDeTipo(8)
analisadorDeTipo('Ruan')

console.log('-----------------------------------|')

console.log(typeof true)
console.log(typeof 8)
console.log(typeof 'Ruan')
