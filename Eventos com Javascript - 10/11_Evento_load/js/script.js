window.addEventListener('load', () => {
    alert('Assine nossos termos de uso')
})

window.addEventListener('beforeunload', function (event) {
    event.returnValue = null
})
