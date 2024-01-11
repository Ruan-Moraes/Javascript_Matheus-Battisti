const pontoRegex = /./

console.log('/./')

console.log(pontoRegex.test('asd'))
console.log(pontoRegex.test(' '))
console.log(pontoRegex.test('123'))
console.log(pontoRegex.test('123asd'))

console.log('----------------')
console.log('/d/')

const dRegex = /\d/ // [0-9]

console.log(dRegex.test('asd'))
console.log(dRegex.test(' '))
console.log(dRegex.test('123'))
console.log(dRegex.test('123asd'))

console.log('----------------')
console.log('/D/')

const DRegex = /\D/ // [^0-9]

console.log(DRegex.test('asd'))
console.log(DRegex.test(' '))
console.log(DRegex.test('123'))
console.log(DRegex.test('123asd'))

console.log('----------------')
console.log('/s/')

const sRegex = /\s/

console.log(sRegex.test('asd'))
console.log(sRegex.test(' '))
console.log(sRegex.test('123'))
console.log(sRegex.test('123asd'))

console.log('----------------')
console.log('/w/')

const wRegex = /\w/

console.log(wRegex.test('asd'))
console.log(wRegex.test(' '))
console.log(wRegex.test('123'))
console.log(wRegex.test('123asd'))
