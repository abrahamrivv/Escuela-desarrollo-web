const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

// const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTIONS = {crossDomain : true}
// const onResponse =  data => console.log(`Hola yo soy ${data.name}`)
// $.get(LUKE_URL, OPTIONS, onResponse)

// const obtenerPersonaje = (id, callback) => {
//     const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
//     $.get(URL, OPTIONS, callback).fail(() => {
//         console.log(`ERROR. No se pudo obtener el personaje ${id}`)
//     })
// }


// PROMESAS PARA SALIR DEL HELL 
const obtenerPersonaje = (id) => {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(URL, OPTIONS, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
   
}

// MÚLTIPLES PROMESAS EN PARALELO
var ids = [1, 2, 3, 4]
var promesas = ids.map(id => obtenerPersonaje(id))

Promise
.all(promesas)
.then(data => console.log(data))
.catch((id) => {
            console.log(`ERROR. El personaje ${id} no se encuentra`)
        })







        // PROMESAS EN SERIE ASINCRONA
// obtenerPersonaje(1)
//     .then(data => {
//         console.log(`El personaje 1 es ${data.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(data => {
//         console.log(`El personaje 2 es ${data.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(data => {
//         console.log(`El personaje 3 es ${data.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(data => {
//         console.log(`El personaje 4 es ${data.name}`)
//     })
//     .catch((id) => {
//         console.log(`ERROR. El personaje ${id} no se encuentra`)
//     })



