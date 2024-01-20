const input = document.querySelector('input')

input.addEventListener('focus', () => {
    console.log('Elemento focado')
})

input.addEventListener('blur', () => {
    console.log('Elemento não está focado!')
})