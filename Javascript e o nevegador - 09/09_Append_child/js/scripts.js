const elementoNovo = document.createElement('h1')
const textoElemento = 'Olá mundo!!!'
const elementoIrmao = document.querySelector('div:nth-child(1) h1')
const elementoPai = elementoIrmao.parentNode

elementoNovo.innerHTML = textoElemento + ' AppendChild'

elementoPai.appendChild(elementoNovo)
