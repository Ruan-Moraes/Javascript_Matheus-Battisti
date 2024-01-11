const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validarDataNasc.test('Ruan@gmail.com'))
console.log(validarDataNasc.test('https://regexr.com/'))
console.log(validarDataNasc.test('zezinho145@gmail.com'))
console.log(validarDataNasc.test('16/12/2004'))
console.log(validarDataNasc.test('44/13/0000'))
