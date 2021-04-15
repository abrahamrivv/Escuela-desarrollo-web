// console.log('a')
// setTimeout(() => console.log('b'), 0) //el delay esta expresado en milisegundos 1000 ms = 1s
// console.log('c')

// aparecen en el navegador en el orden de a c b, porque js le dice al navegador, que ejecute la funcion en 0 seg, lo que hace el navegador es que agarra la funcion
// y la deja en la cola de tareas, lo que hace js mientras es seguir ejecutando el programa
// inmediatamente la tarea en la cola va a estar lista, pero js no la va a poder ejecutar, hasta que no termine el programa principal, cuando llegue al final va a sacar tareas de la cola de tareas, por eso sale en el orden a c b

// setTimeout(() => {
    
// }, timeout) estructura

setTimeout(() => console.log('d'), 2000)
for (var i = 0; i < 10000000000; i++){

}