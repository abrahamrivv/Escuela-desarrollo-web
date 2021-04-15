const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// misma funcion pero sin callback porque ahora es con ec6, promesas en lugar de callbacks
const fetchData = (url_api) =>{
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = (() =>{
            if(xhttp.readyState === 4){

                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))
                }
            })
        xhttp.send()
    })   
}

module.exports = fetchData