const salariosCol = colombia.map(
    (personita) => personita.salary
)

const salarioColOrenado = salariosCol.sort(
    (salaryA, salaryB) => salaryA - salaryB
)

const esPar = (numerito) => (numerito % 2 === 0)

const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista / lista.length

    return promedioLista
}

const medianaSalariosCol = (lista) => {
    const mitad = parseInt(lista.length / 2)

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1]
        const personitaMitad2 = lista[mitad]

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        return mediana
    } else {
        const personitaMitad = lista[mitad]
    }
}

console.log(medianaSalariosCol(salarioColOrenado))