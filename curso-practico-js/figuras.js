// código del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4
}
perimetroCuadrado()


function areaCuadrado(lado){
    return lado * lado
}
areaCuadrado()

console.groupEnd()

// código del triángulo
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base)
}
perimetroTriangulo()

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
alturaTrianguloIsosceles()

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2
} 
areaTriangulo()

console.groupEnd()

// código círculo
console.group("Círculos")

const PI = Math.PI

function diametroCirculo(radio){
    return radio * 2
}
diametroCirculo()

function circunferencia(radio) {
    const diametro = diametroCirculo(radio)
    return PI * diametro
}
circunferencia()

function areaCirculo(radio) {
    return (radio * radio) * PI
}
console.groupEnd()

// Aquí interactuamos con HTML

// cuadrado
 function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
 }


 function calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado")
    const value = input.value

    const area = areaCuadrado(value)
    alert(area)
 }

//  triángulo

function calcularPerimetroTriangulo(){
    const ladoDerecho = document.getElementById("ladoDerecho")
    const ladoIzquierdo = document.getElementById("ladoIzquierdo")
    const base = document.getElementById("baseTriangulo")

    const ladoD = ladoDerecho.value
    const ladoI = ladoIzquierdo.value
    const baseDelTriangulo = base.value

    const perimetro = perimetroTriangulo(ladoD, ladoI, baseDelTriangulo)
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const ladoDerecho = document.getElementById("ladoDerecho")
    const ladoIzquierdo = document.getElementById("ladoIzquierdo")
    const base = document.getElementById("baseTriangulo")

    const ladoD = ladoDerecho.value
    const ladoI = ladoIzquierdo.value
    const baseDelTriangulo = base.value

    const altura = alturaTrianguloIsosceles(ladoI, ladoD, baseDelTriangulo)

    const area = areaTriangulo(baseDelTriangulo, altura)
    alert(area)
}   