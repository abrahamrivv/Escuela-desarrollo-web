// VEMOS CONDICIONALES Y ARROW FUNCTIONS


var sacha = {
    nombre: 'Sacha',
    apellido: 'Gonzalez',
    edad : 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    
    if (persona.ingeniero){
        console.log('Ingenier@')
    }

    if (persona.cocinero){
        console.log('cocinero')
    } else {
        console.log('No es cociner@')
    }

    if (persona.cantante){
        console.log('cantante')
    }

    if (persona.dj){
        console.log('dj')
    }

    if (persona.guitarrista){
        console.log('guitarrista')
    }

    if (persona.drone){
        console.log('vuela drones')
    }
    
}

var edgar = {
    nombre: 'Edgar',
    apellido: 'Rodriguez',
    edad: 15
}

const MAYORIA_DE_EDAD = 18

// function esMayor(persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// ARROW FUNCTION
// cuando hay sun solo parametro, se pueden quitar los parentesis
// si la funncion, lo único que hace es un return, se puede obviar el return y omitirlo
// const esMayor = persona => persona.edad >= MAYORIA_DE_EDAD

const esMayor = ({edad}) => edad >= MAYORIA_DE_EDAD


function imprimirEdad(persona){

    if (esMayor(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} aún tas chiquit@:(`)
    }
}

const permitirAcceso = ({edad}) => {
    if (!esMayor({edad})){
        console.log('ACCESO DENEGADO')
    }else{
        console.log('ACCESO CONSEDIDO')
    }
}

imprimirEdad(sacha)
imprimirEdad(edgar)
// imprimirProfesiones(sacha)