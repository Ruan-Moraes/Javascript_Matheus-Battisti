const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

function msg() {
    console.log('Clicou em mim!')
}

btn1.addEventListener('click', msg)
btn2.addEventListener('click', () => {
    btn1.removeEventListener('click', msg)
    console.log('Evento removido!')
})
