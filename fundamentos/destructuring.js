function rand({min = 0, max = 100}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//vai gerar números aleatórios entre 50 e 40
const obj = {max: 50, min: 40}
console.log(rand(obj))
//vai gerar números aleatórios entre 95 e 100, umva vez que o máximo já está setado
console.log(rand({min: 95}))
console.log(rand({}))

