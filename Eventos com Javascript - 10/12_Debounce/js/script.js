let timeout

window.addEventListener('mousemove', function (event) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        console.log(event.x)
    }, 500)
})
