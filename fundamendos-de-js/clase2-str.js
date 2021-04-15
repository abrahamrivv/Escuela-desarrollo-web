var nombre = 'Sacha', apellido = 'Lifszyc'
//el " ; " solo se usa en casos muy puntuales que veré ,más adeñante en el curso
// a && b las 2 condiciones se cumplen y a || b una de las 2 condiciones se cumplen, esto es del curso basico de js

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)// en los parentesis va la posicion del caracter que queremos que nos de
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` // interpolacion, se hace dentro de la comilla invertida para llamar variables y concatenar, dentro de la llaves {} se puede escribir codigo js

var str = nombre.substr(1, 2) // el metodo substr trae los caracteres que le demos como parametro

console.log(nombreEnMayusculas)