var sacha = {
    nombre: 'Sacha',
    apellido: 'Ramírez',
    edad: 28,
}

var dario = {
    nombre: 'Dario',
    apellido: 'Gaona',
    edad: 30,
}

function imprimirNombreEnMayusculas(persona){
    // var nombre = persona.nombre es lo mismo que la linea de abajo
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'PEPE'})
// imprimirNombreEnMayusculas() sin parametro causaria error

function imprimirNombreyEdad({nombre, apellido, edad}){
    console.log(`'Hola me llamo ${nombre} ${apellido} y tengo ${edad} 'años'`)
}

imprimirNombreyEdad(sacha)
imprimirNombreyEdad(dario)