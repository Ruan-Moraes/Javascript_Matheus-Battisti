const reg1 = /[12345]/

console.log(reg1.test('Temos o número 6'))
console.log(reg1.test('Temos o número 2'))
console.log(reg1.test('Temos o número 23'))
console.log(reg1.test('Temos o número 60'))
console.log(reg1.test('Temos o número 12345'))
console.log(reg1.test('Temos o número 55555'))