// Spread Operator
const obj = {
    name: 'oscar',
    age: 23,
    country: 'MX',
}

// let { name, ...all } = obj
// console.log(name, all)

// si solo quisiera ciertos elementos, debo extraer el que no necesito
let { country, ...all } = obj
console.log(all)


// Porpagation Properties
const obj1 = {
    name: 'FER',
    age: 33,
}

const obj2 = {
    ...obj1,// combinar objetos uno dentro de otro
    country: 'MX',
}

console.log(obj2)


// Promise Finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout( () => resolve('HOLAAAAAA PRRO'), 3000)
            : reject(new Error ('PTM FALLÓ'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('fin'))


// regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)