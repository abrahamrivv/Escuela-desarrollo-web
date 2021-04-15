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

function imprimirNombreEnMayusculas({nombre}){
    
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'PEPE'})
// imprimirNombreEnMayusculas() sin parametro causaria error