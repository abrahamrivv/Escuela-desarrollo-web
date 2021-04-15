var sacha = {
    nombre: 'Sacha',
    apellido: 'Ramírez',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesaba: ${sacha.peso}kg`)

const CAMBIO_PESO = 0.3

const DIAS_DEL_ANO = 265

const aumentarDePeSo = (persona) => persona.peso += CAMBIO_PESO

const bajarDePeSo = (persona) => persona.peso -= CAMBIO_PESO

const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3

var dias = 0

while(sacha.peso > META){
    
    if (comeMucho()){
        aumentarDePeSo(sacha)
    }else if(haceDeporte()){
        bajarDePeSo(sacha)
    }

    dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazó 3kg`)