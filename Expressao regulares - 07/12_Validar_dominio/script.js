const ItIsAValidBrazilianDomain =
    /(https?\/\/\:)?(www)?([a-z1-9]{1,100}).com(.br)/

console.log(
    ItIsAValidBrazilianDomain.test(
        'https://translate.google.com.br/?hl=pt-BR&sl=pt&tl=en&text=%C3%A9%20um%20dominio%20brasileiro%20valido&op=translate'
    )
)

console.log(ItIsAValidBrazilianDomain.test('https://regexr.com/'))
