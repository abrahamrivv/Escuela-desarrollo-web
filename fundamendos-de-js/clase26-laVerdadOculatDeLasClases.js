// HERENCIA DE PROTOTIPOS (REVISAR ESTA CLASE OTRA VEZ)

function heredaDe (prototipoHijo, prototipoPadre) {
    var fn  = function(){}
    fn.prototype = prototipoPadre.prototype //TODAS LAS UNCIONES TIENEN EL ATRIBUTO PROTOTYPE
    prototipoHijo.prototype = new fn 
    prototipoHijo.prototype.constructor = prototipoHijo
}

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

function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollad@r`)
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