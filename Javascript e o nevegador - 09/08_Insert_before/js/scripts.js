const elementoNovo = document.createElement('p')
const elementoAlvo = document.querySelector('div:nth-child(1) > h1')
const elementoPai = document.querySelector('div:nth-child(1)')

elementoPai.insertBefore(elementoNovo, elementoAlvo)

const contentP = ('Olá mundo! Insert Before')

const elementoP = document.querySelector('div:nth-child(1) > p:nth-child(1)')

console.log(elementoP)

elementoP.innerHTML = contentP