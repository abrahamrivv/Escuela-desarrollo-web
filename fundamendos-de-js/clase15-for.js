var sacha = {
    nombre: 'Sacha',
    apellido: 'Ramírez',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesaba: ${sacha.peso}kg`)

const CAMBIO_PESO = 0.2

const aumentarDePeSo = (persona) => persona.peso += CAMBIO_PESO

const bajarDePeSo = (persona) => persona.peso -= CAMBIO_PESO

// iniciiamos el for con un contador, despues con una condicional, lo del final es para que se incremente el contador
for (var i = 1; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25){
        aumentarDePeSo(sacha)
    }else if(random < 0.5){
        bajarDePeSo(sacha)
    }
    
}

console.log(`Al final del año ${sacha.nombre} pesaba: ${sacha.peso.toFixed(1)}kg`)