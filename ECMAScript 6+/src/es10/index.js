let array = [1,2,3 [1,2,3, [1,2,3]]]

console.log(array.flat(2))

// console.log()

let array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value, value * 2]))




let string = '         hello'
console.log(string)
console.log(string.trimStart())

let str2 = 'hello2       '
console.log(str2)
console.log(str2.trimEnd())




try {

} catch (error) {
    error
}




let entries = [['name', 'oscar'], ['age', 32]]
console.log(Object.fromEntries(entries))



let mySymbol = 'Hola soy Abraham'
let symbol = Symbol(mySymbol)
console.log(symbol.description)
// console.log(Symbol(mySymbol).description) otra forma menos adecuada de escribirlo