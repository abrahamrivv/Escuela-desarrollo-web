const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('AWEBOOO SE PUDO'), 3000)
            : reject(new Error('test error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before1')
doSomething()
console.log('After1')

const anotherFunction = async () => {
    try {
        const something =  await doSomethingAsync()
        console.log(something)
    }catch (error) {
        console.error(error)
    }
}

console.log('Before2')
anotherFunction()
console.log('After2')