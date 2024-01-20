window.addEventListener('keydown', (event) => {
    if (event.key == 'q') {
        console.log('Apertou a letra Q')
    }
})

window.addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        console.log('Soltou o ENTER')
    }
})
