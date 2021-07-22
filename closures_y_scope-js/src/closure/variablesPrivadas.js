// Cómo crear variables privadas con closures clase 8
const person = () => {
    var saveName = "Name"
    return {
        getname: () => {
            return saveName
        },
        setName: (name) => {
            saveName = name
        },
    }
}

newPerson = person()
console.log(newPerson.getname()) // valor acumulado
newPerson.setName("ALFREDO")
console.log(newPerson.getname()) // nombre asignado