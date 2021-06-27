// código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado * 4
console.log(`El perímetro del cuadrado es ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado 
console.log(`El área del cuadrado es ${areaCuadrado}cm2`)
console.groupEnd()

// código del triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

console.log(`Los lados del triángulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`)
console.log(`La altura del triángulo mide ${alturaTriangulo}cm`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log(`El perímetro del triánguo mide ${perimetroTriangulo}cm`)

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log(`El área del triángulo mide ${areaTriangulo}cm2`)
console.groupEnd()

// código círculo
console.group("Círculos")
const radio = 4
const diametro = radio * 2
const PI = Math.PI

const circunferencia = PI * diametro
console.log(`Circunferencia es igual a ${circunferencia}cm`)

const areaCirculo = (radio * radio) * PI
console.log(`Area del círculo es igual a ${areaCirculo}cm2`)
console.groupEnd()