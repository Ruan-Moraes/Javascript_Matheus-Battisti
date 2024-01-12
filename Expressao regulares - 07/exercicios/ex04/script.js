const regex = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/

console.log(regex.test('127.0.0.1'))
console.log(regex.test('999.999.999.999'))
console.log(regex.test('10.1.7.247'))
console.log(regex.test('8.8.8.8'))
console.log(regex.test('8444.8777.8111.8147'))
