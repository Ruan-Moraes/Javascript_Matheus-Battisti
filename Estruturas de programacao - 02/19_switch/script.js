let nome = 'Ruan'

switch (nome) {
    case 'Ruan':
        console.log('O nome é Ruan!')
        break
    case 'Carlos':
        console.log('O nome é Carlos!')
        break
    default:
        console.log('O nome nem é Ruan e nem Carlos!')
}

if (nome == 'Ruan') {
    console.log('O nome é Ruan!')
} else if (nome == 'Carlos') {
    console.log('O nome é Carlos!')
} else {
    console.log('O nome nem é Ruan e nem Carlos!')
}
