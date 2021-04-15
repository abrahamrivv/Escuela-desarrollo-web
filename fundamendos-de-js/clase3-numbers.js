var edad = 27

//incremento 2 formas
//edad = edad + 1
edad += 1

var peso = 75
// decremento 2 formas
//peso = peso - 2
peso -= 2

// sumar y restar nuemeros dentro de variables

var sandwich = 1

peso = peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100 //para que el resultado decimal sea mas certero
var totalStr = total.toFixed(2)// para mostrar el numero de carcateres que se muestren despues del punto decimal
var total2 = parseFloat(totalStr)

var pizza = 8 
var personas = 2
var cantidadPorciones = pizza / personas