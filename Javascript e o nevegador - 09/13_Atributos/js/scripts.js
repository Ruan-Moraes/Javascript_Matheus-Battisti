const hyperLink = document.querySelector('footer a')
const link = 'https://github.com/Ruan-Moraes'

hyperLink.setAttribute('href', link)
hyperLink.setAttribute('target', '_blank')

console.log(hyperLink.getAttribute('href'))