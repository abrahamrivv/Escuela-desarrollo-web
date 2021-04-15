// HERENCIA DE PROTOTIPOS USANDO CLASS emascript repetir clase si se necesita

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola me llamao ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        console.log(`${this.altura >= 1.80 ? 'Soy alto ;)' : 'No soy alto :c'}`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar () {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollad@r`)
    }
}

var sacha = new Persona('Sacha', 'Rivera', 1.80)
var erika = new Persona('Erika', 'Rodriguez', 1.75)
var pedro = new Persona('Pedro', 'Martínez', 1.30)

sacha.saludar()
erika.saludar()
pedro.saludar()

sacha.soyAlto()
erika.soyAlto()
pedro.soyAlto()

var pedro = new Desarrollador('Pedro', 'Martínez', 1.30)

pedro.saludar()