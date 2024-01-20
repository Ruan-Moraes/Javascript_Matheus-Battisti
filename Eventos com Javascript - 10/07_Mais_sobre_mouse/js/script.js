const btnOne = document.querySelector('#btn1')
const btnTwo = document.querySelector('#btn2')

btnOne.addEventListener('mousedown', function () {
    console.log('Apertou o botão!')
})

btnOne.addEventListener('mouseup', function () {
    console.log('Soltou o botão!')
})

btnTwo.addEventListener('dblclick', function () {
    console.log('Clicou duas vezes!')
})

btnTwo.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    console.log('Botão direito')
})

