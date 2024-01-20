const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

function msg(event) {
    console.log(event)
}

btn1.addEventListener('click', msg)
btn2.addEventListener('click', (event) => {
    console.log(event)
})