const reg = /\w+: (Ruan|João|Ana)/

console.log(reg.test('Nome: Matheus'))
console.log(reg.test('Nome: Ruan'))
console.log(reg.test('Nome: Maria'))