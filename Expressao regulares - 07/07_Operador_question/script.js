const padrao = /abacax?i?/

console.log(padrao.test('abacaxi'))
console.log(padrao.test('abacai'))
console.log(padrao.test('abacaix'))

const padrao2 = /\d+\w?/

console.log(padrao.test('123'))
console.log(padrao.test('123a'))
console.log(padrao.test('123 '))