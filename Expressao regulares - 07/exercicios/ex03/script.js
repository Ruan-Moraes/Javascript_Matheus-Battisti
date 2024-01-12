const regex = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(regex.test('123ID'))
console.log(regex.test('123'))
console.log(regex.test('abcID'))
console.log(regex.test('ABC123ID'))
console.log(regex.test('ABC123'))

console.log(regex.test('Marca: Adidas'))
console.log(regex.test('Marca: Pum'))
console.log(regex.test('Marca: Puma'))
console.log(regex.test('Marca: Adidas'))
console.log(regex.test('Marca: Asics'))
