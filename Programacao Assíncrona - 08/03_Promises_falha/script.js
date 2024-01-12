const p = Promise.resolve(new Error('Não deu certo!'))

console.log('lalalalal')

p.then(value => console.log(value)).catch(error => console.log(`Falhou ${error}`))