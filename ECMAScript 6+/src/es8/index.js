//Object entries deveule los valores de una matriz.
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

//Tranformar este objeto en una matriz. 
const entries = Object.entries(data)
console.log(entries)
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length)

//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 

 const values = Object.values(data)
 console.log(values)
 console.log(values.length)

 // Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string = 'hello'
console.log(string.padStart(8, 'hi '))// se añade al inicio la palabra 'hi'
console.log(string.padEnd(9, ' LOL'))// Se añade al final la palabra 'hi'

const obj = {
    name: 'oscar',
    surname: 'Ramírez', // coma "," en el último para evitar errores si se desea agregar otro elemento al objeto, se le llama Trailing commas
}



// Asyn await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
           ? setTimeout(() => resolve('Hello World'), 3000)
           : reject(new Error('UPS ERROR'))
    })
}
// 2 formas de hacer asyn await, la segunda es la mejor práctica
const HelloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

HelloAsync()

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()