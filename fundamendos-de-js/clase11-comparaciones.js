var x = 4, y = '4'
// lo mas recomendable es usar el triple igual, para comparar valores excactos, el doble igual es para comparar que este escrito lo mismo inddependietemente del valor que sea, numero, str, etc
// x == y true
// x === y false

var sacha = {
    nombre: 'Sacha'
}

// var otraPersona = {
//     nombre: 'Sacha' aquí es lo contrario, si se modifica el nombre en cualquier variable, no afecta a la otra, porque son distintos objetos
// }

// cuando se comparan objetos con doble o triple igual, js pregunta por la referencia a la variable que estamos utilizando, si es distinta da flase y si es la misma da true
// puede ser así:
var otraPersona = sacha //si se modifica el nombre, cambia el valor de ambos, porque apuntan al mismo lado en la memoria RAM, es decir que no se crea otro objeto, se usa un objeto en común
// y así no

// var otraPersona = {
//     ...sacha
// } porque se crea otro objeto