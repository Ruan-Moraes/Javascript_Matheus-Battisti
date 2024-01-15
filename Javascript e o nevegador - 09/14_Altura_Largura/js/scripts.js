const elemento = document.querySelector('div:nth-child(1)')

console.log(`A largura é: ${elemento.offsetWidth}`) // Considera as bordas!
console.log(`A altura é: ${elemento.offsetHeight}`)

console.log(`A largura é: ${elemento.clientWidth}`) // Não considera as bordas!
console.log(`A altura é: ${elemento.clientHeight}`)