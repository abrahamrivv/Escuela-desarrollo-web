// antes de ECMAScript 6

// function nuevaF(name, age, country){
//     var name = name || 'Fernando'
//     var age = age || '17'
//     var country = country || 'Mx'
//     console.log(name, age, country)
// }

// let fraseChida = 'Voy a escribír una frase mamalona \n'
// + 'bien mamalona'  

// let Angel = {
//     nombre: 'Angel',
//     edad: 17,
//     country: 'Mx'
// }

// console.log(Angel.nombre, Angel.edad)

// Con ECMAScript 6

// function nuevaF2(name = 'Fernando', age = '17', country = 'Mx'){
//     console.log(`Hola ${name} por lo que veo tienes ${age} años y eres de ${country}`)
// }

// nuevaF2()
// nuevaF2('Abraham', '18', 'MX')

// let FraseChida2 = `Voy a escribír otra frase mamalona
// ahora es otra línea de la frase épica B)`

// console.log(fraseChida)
// console.log(FraseChida2)

// let Josue = {
//     nombre: 'Josue',
//     edad: 17,
//     country: 'Mx'
// }

// let { nombre, edad, country } = Josue
// console.log(nombre, edad, country)

// let team1 = ['juan', 'pepe']
// let team2 = ['Valeria', 'Pedro']

// let TeamUnidos = ['Alonso', ...team1, ...team2]

// console.log(TeamUnidos)


// let name2 = 'Abraham'
// let edad = 17

// obj = { name2: name2, edad: edad } // antes de ecmascript 6

// obj2 = { name2, edad } // con ecmascript 6 

// console.log(obj2)

// let names = [
//     {name: 'Abraham', edad: 17},
//     {name: 'pepe', edad: 18}
// ]

// let ListOfNames = names.map(function(item){ //funcion antes de es6
//     console.log(items.name)
// })

// let ListOfNames2 = names.map(item => console.log(item.name)) // arrowfunction es6

// const ListOfNames3 = (name, edad) => {
//     console.log()
// }

// const ListOfNames4 = name => {
//     console.log()
// }

// const square = num => num * num


// estructura de una promesa
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey')
        } else {
            reject('UPS oh oh u')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2, 2))

// import { hello } from './module' marca error porque no tengo una extencion
const hello = require('./module')

hello()

function* helloWorld(){
    if (true) {
        yield 'hello'
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
