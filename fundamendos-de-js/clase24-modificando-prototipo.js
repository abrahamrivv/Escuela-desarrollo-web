function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = () => {
    console.log(`Hola me llamao ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => {
    console.log(`${this.altura >= 1.80 ? 'Soy alto ;)' : 'No soy alto :c'}`)
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

// QUIEN ES THIS
// Window es el objeto global dentro del navegador.

// Cuando this no es lo que esperamos, este es el principal error en JS.

// En las Arrow functions, se asigna la función , pero cambia el this dentro de la función , ya que trata de tomar el this global, es decir, el que está fuera de la Arrow function.

// Para comprobarlo en consola:

// this === window