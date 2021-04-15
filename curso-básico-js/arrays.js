var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

var masFrutas = frutas.push("Uvas"); //agrega un elemento al final de la lista(o array)

var ultimo = frutas.pop("Uvas"); //elimina el ultimo elemento del array(o lista), asi que no se porque escribio uvas si ya se da por entendido que se elimina el ultimo elemento

var nuevaLongitud = frutas.unshift("Limón"); // agrega un elemento al principio de la lista

var borrarFruta = frutas.shift("Limón"); // elimina el primer elemento de la lista

var posicion = frutas.indexOf("Cereza"); //te dice en que posicion esta el elemento que pusiste dentro del parentesis

console.log(frutas)