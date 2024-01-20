const btn = document.querySelector('#btn')
const p = document.querySelector('p')

function msg(event) {
    console.log('clicou no button!')
    event.stopPropagation()
}

btn.addEventListener('click', msg)
p.addEventListener('click', () => {
    console.log('Clicou no P!')
})