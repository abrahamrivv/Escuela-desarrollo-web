// objects: funcion constructora

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var AutoNuevo1 = new auto("Tesla", "Roadster", 2020);//new genera una nueva instancia que deriva de la funcion constructora auto("Tesla", "Roadster", 2020);
var AutoNuevo2 = new auto("chevrolet", "camaro", 2020);
var AutoNuevo3 = new auto("Mercedez", "alch no c", 2020);

console.log(AutoNuevo1);
console.log(AutoNuevo2);
console.log(AutoNuevo3);

// ejercicio generar con cilco for objetos de autos automáticos
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  
  let autos = [];
  
  for(let i = 0 ; i < 5 ; i++){
    let MARCA = prompt("Ingresa la marca del auto:");
    let MODELO = prompt("Ingresa el modelo del auto:");
    let ANNIO = prompt("Ingresa el año del auto:");
    autos.push(new auto (MARCA, MODELO, ANNIO));
  }

  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }