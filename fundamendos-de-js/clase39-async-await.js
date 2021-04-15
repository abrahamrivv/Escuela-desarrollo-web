// REPETIR CLASE
// REPETIR CLASE


const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const OPTIONS = {crossDomain : true}

const obtenerPersonaje = (id) => {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(URL, OPTIONS, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
   
}

const onError = (id) => console.log(`ERROR. El personaje ${id} no se encuentra`)

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {

        var data = await Promise.all(promesas)
        console.log(data)

    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()