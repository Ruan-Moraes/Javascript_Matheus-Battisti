const tituloPrincipal = document.querySelector('div:nth-child(1) h1')
const tituloPrincipalPai = tituloPrincipal.parentNode
const elementoNovo = document.createElement('span')

const content = 'O título foi trocado por um span!'
elementoNovo.innerHTML = content

tituloPrincipalPai.replaceChild(elementoNovo, tituloPrincipal)
