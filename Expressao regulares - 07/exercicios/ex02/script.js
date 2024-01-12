const regex = /[a-zA-Z1-9]+?ID\b/

console.log(regex.test('123ID'))
console.log(regex.test('123'))
console.log(regex.test('abcID'))
console.log(regex.test('ABC123ID'))
console.log(regex.test('ABC123'))
