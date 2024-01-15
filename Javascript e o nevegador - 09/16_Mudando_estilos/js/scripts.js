const elemento = document.querySelector('div:nth-child(1)')

elemento.style.background = 'red'
mudarEstilo()

function mudarEstilo() {
    setTimeout(() => {
        elemento.style.padding = '1rem'
        elemento.style.color = 'white'
        elemento.style.textShadow = '2px 2px 0 black'
    }, 2 * 1000)
}