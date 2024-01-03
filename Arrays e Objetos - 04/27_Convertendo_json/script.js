let pessoa = {
    "nome": "Ruan Moraes",
    "idade": "19",
    "profissao": "Programador",
    "Hobbies": ["Ler, Calistenia, VideoGames"]
}

let pessoaTexto = JSON.stringify(pessoa) // Transforma Json em texto

console.log(pessoaTexto)
// console.log(pessoaTexto.nome)

let pessoaJson = JSON.parse(pessoaTexto) // Transforma texto em Json

console.log(pessoaJson)
console.log(pessoaJson.nome)