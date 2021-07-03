
function calcularMediaAritmetica(lista){
    // let sumaLista = 0

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista / lista.length

    return promedioLista
}

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce  EXPLICACIÓN EL MÉTODO ".reduce()"