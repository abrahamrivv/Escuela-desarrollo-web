function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamao ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
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

// Un poco de teoría interesante vista en el video:

// Hablar de objetos en javascript es hablar de prototipos.
// this hace referencia al nuevo objeto que se acaba de crear.
// la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
// La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.