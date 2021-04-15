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
// imprimirNombreEnMayusculas({nombre: 'PEPE'})
// imprimirNombreEnMayusculas() sin parametro causaria error

function cumpleaños(persona){
    return{
        ...persona,   //esto es para crear otro objeto y que no se modifique el otro (ELEGIR ESTA OPCION) Si tienes pensado usar tecnologías como Flux o Redux, pon mucha atención a este video. Nunca debes modificar el estado del objeto sino crear otro.
        edad: persona.edad + 1
    }
    // persona.edad += 1  esto si modifica el antiguo objeto en l avariable sacha o dario
}

