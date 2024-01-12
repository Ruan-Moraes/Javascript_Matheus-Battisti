let p = Promise.resolve(5 + 7)

console.log('Outros códigos')

console.log(p)

p.then((value) => {
    return value - 2
}).then((value) => {
    return console.log('Finalizei a segunda tarefa ' + value)
})
