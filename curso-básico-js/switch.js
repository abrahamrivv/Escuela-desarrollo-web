//LA DIFERENCIA ENTRE SWITCH Y UN CONDICIONAL COMO IF, ES QUE SWITCH SIRVE PARA EVALUAR VALORES Y EL IF SIRVE PARA EVALUAR CONDICIONES

var numero = 10;

switch (numero) {
    case 1:
        console.log("Soy uno!")
        break;
    case 10:
        console.log("Soy un 10!")
        break;
    case 100: 
        console.log("Soy un 100!")
        break;
    default:
        console.log("no soy nada:/")
}