const notab = /[^ab]/

console.log(notab.test('a'))
console.log(notab.test('aqui tem a'))

const nottoaz = /[^a-z]/

console.log(nottoaz.test('123 as'))
console.log(nottoaz.test('asadasdhahdsadhash'))

const az = /[a-z]/

console.log(nottoaz.test('asdasd145dasdadsads'))