// repatir clase para comprender mejor el tema

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista / lista.length

    return promedioLista
}

// const lista1 = [Number(prompt("escribe la lista")), Number(prompt("escribe la lista")), Number(prompt("escribe la lista")), Number(prompt("escribe la lista"))]

// const mitadLista1 = parseInt(lista1.length / 2)

function esPar(numerito){
    if (numerito % 2 === 0) { //  EL % ES EL RESIDUO/DECIMALES DE UNA DIVISIÓN, la condicion el if significa que si el % osea el resiudo de numerito dividido entre 2, es 0 entonces es par, sino es impar
        return true
    } else {
        return false
    }
}

let mediana

function escribirArrays(elementos) {
    
    const lista1 = elementos
    const ordenarLista1 = lista1.sort()
    const mitadLista1 = parseInt(ordenarLista1.length / 2)


    if (esPar(lista1.length)) {
        const elemento1 = ordenarLista1[mitadLista1 - 1]
        const elemento2 = ordenarLista1[mitadLista1]
    
        const promedioElemento1y2  = calcularMediaAritmetica([elemento1, elemento2])
    
        mediana = promedioElemento1y2
    } else {
        mediana = ordenarLista1[mitadLista1]
    }
    
    console.log(mediana)
    // alert(mediana)
}