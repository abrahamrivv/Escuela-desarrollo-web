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

const PERSONA_ALTA_MIDE = 1.8

// const esAlta = ({altura}) => altura > PERSONA_ALTA_MIDE  ESTAS ES LO MISMO PERO MAS DESGLOZADAS
// const esAlta = ({altura}) => altura < PERSONA_ALTA_MIDE
const esAlta = persona => persona.altura > PERSONA_ALTA_MIDE
const esBaja = persona => persona.altura < PERSONA_ALTA_MIDE

var personas = [sacha, alan, martin, dario, vicky, paula]


var personasBajas = personas.filter(esBaja)
var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona){
//     return persona.altura > PERSONA_ALTA_MIDE
// }) ESTO TAMBIEN ES UNA OPCION, PONER UNA FUNCION ANONIMA DENTRO DE LOS PARENTESIS FUNCIONA IGUAL

console.log(personasAltas)
console.log(personasBajas)

