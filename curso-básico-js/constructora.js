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
