const regex = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(regex.test('ZezinhoDas_KILLS'))
console.log(regex.test('Joao1214@'))

