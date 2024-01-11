const dia = /\d\d/

console.log(dia.test('2019') && '2019'.length == 2)
console.log(dia.test('asd'))
console.log(dia.test('04') && '04'.length == 2)
console.log(dia.test('asd1'))

const palavrasPeloMenosTresLetras = /\w\w\w/

console.log(palavrasPeloMenosTresLetras.test('asd'))
console.log(palavrasPeloMenosTresLetras.test('asdd'))
console.log(palavrasPeloMenosTresLetras.test('as'))
