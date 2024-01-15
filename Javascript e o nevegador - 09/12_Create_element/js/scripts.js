const lista = document.createElement('ul')

for (let index = 0; index <= 10; index++) {
    const li = document.createElement('li')
    const liContent = document.createTextNode(`O número é ${index}!`)

    li.appendChild(liContent)
    lista.appendChild(li)
}

document.querySelector('div:nth-child(2)').appendChild(lista)
