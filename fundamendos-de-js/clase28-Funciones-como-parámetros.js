// HERENCIA DE PROTOTIPOS USANDO CLASS emascript repetir clase si se necesita

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        var {nombre , apellido} = this //son equivalentes esta a las 2 de arriba
        console.log(`Hola me llamao ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(nombre, apellido, false)
        }
    }

    soyAlto(){
        console.log(`${this.altura >= 1.80 ? 'Soy alto ;)' : 'No soy alto :c'}`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar (fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollad@r`)
        if(true){
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`AH miraaa eres dev`)
    }else{
        console.log('No eres de-sarrollador :0')
    }
}

var sacha = new Persona('Sacha', 'Rivera', 1.80)
var erika = new Persona('Erika', 'Rodriguez', 1.75)
var pedro = new Desarrollador('Pedro', 'Martínez', 1.30)

sacha.saludar()
erika.saludar(responderSaludo)
pedro.saludar(responderSaludo)

// sacha.soyAlto()
// erika.soyAlto()
// pedro.soyAlto()

// var pedro = new Desarrollador('Pedro', 'Martínez', 1.30)

// pedro.saludar()