
function mediaArmonica(lista) {
    // https://www.youtube.com/watch?v=xnPPCA5OIKc&ab_channel=FelipeDelgado como sacar la media armonica
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce método reduce explicado
    const valoresDivididos = lista.map((elemento) => 1/elemento);
    const sumaValoresDivididos = valoresDivididos.reduce((acc, cur) => acc + cur);
    const resultado = lista.length / sumaValoresDivididos
    console.log(`La media armonica es ${resultado}`) 
}