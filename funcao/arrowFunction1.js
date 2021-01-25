// funcão tradicional:
let dobro = function (a) {
    return 2 * a
}

// agora no modo arrow:
dobro = (a) => {
    return 2 * a
}

// ou:

dobro = a => 2 * a // return está implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um paramêtro
console.log(ola())