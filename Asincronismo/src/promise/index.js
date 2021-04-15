const somethingEillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('YEEEI')
        }else{
            reject('UPS:(')
        }
    }) 
}

somethingEillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

    
const somethingEillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve('ESOOOO')
            }, 2000)
        }else{
            const error = new Error ('BUUU:C')
            reject(error)
        }
    })
}

somethingEillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

    Promise.all([somethingEillHappen(), somethingEillHappen2()])
        .then(response => {
            console.log('Array of results', response)
        })
        .catch(err => {
            console.error(err)
        })