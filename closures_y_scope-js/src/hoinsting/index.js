// Hoisting
// Levantamiento de variables (ayuda que da javascript por defecto)
// cada identidificador sin una declaracion si es una variable(var),let,const se terminara por convertir en una var a; a = 2
a = 2;
console.log('valor a por hoisting: ', a);
var a;
// Hoisting funciona solo en las declaraciones de variables
console.log('valor a por var: ', a);

console.log(a);
var a;

// Hoisting para var y functions
// Solo nos jode en variables var
// para las funciones el levantamiento nos ayuda a que si esta funcion aun no se ha definido, este lo tomara como si definitivamente fuera a crearse pero mas tarde por lo cual lo deja y cuando termine este dice se encontro la funcion por ende si existe en este punto por lo cual se referencia a ella

nameOfDog('Mascota Desde Hoisting')

function nameOfDog(name){
    console.log(name);
}

nameOfDog('Sandy sin hoisting')