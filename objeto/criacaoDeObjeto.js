// criando um objeot usando a notação literal
const obj1 = {}
console.log(obj1)

// criando um objeto usando JS (JSON - JavaScript Object Notation)
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// criando um objeto a partir de funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto)

// criando objetos a partir de uma função factoty
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 8000, 5)
const f2 = criarFuncionario('Tereza', 12000, 2)
console.log(f1.getSalario(), f2.getSalario())
