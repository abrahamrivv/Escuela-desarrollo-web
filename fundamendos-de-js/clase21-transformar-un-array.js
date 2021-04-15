var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

const pasarAlturaCms = persona => ({
    ...persona,
    altura: persona.altura * 100
}) //se usan parentesis cuando vas a crear un nuevo objeto 

var personasCms = personas.map(pasarAlturaCms)//la función map del array nos permite transformar valores de los objetos en el array, map siempre devuelve un nuevo array, no modifica el original

console.log(personasCms)