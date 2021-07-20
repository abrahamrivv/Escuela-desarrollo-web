const fruits = () => {
    var fruit = "apple"
    console.log(fruit)
}

fruits()

const anotherFunction = () => {
    var x = 1
    var x = 2
    let y = 1
    // let y = 2
    console.log(x)
    console.log(y)
}

anotherFunction()

// resumen
// Un pequeño resumen sobre como actúan las diferentes variables:

// Las variables escritas con la palabra clave var pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

// Las variables escritas con la palabra clave let no pueden ser redeclaradas, si lo haces mostrara un “error: esta variable ya ha sido declarada” , pero su valor puede ser reasignado: