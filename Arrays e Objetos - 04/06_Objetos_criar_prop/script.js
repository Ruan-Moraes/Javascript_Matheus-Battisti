let pessoa = {
    nome: 'Ruan Moraes',
    idade: 19,
    profissão: 'Programador' // Por ter acento a propriedade é entendi como String.
}

console.log(pessoa.nome)

delete pessoa.nome

console.log(pessoa.nome)

console.log(pessoa)

pessoa.casado = false

console.log(pessoa.casado)

console.log(pessoa)