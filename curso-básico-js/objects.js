var miAuto = {
    marca: "Tesla",
    modelo: "Model 3",
    annio: 2020,
    detalleDelAuto: function(){
        console.log('Auto',this.marca, this.modelo, 'del año', this.annio);
    }//¿Quién es this? Es una variable que hace referencia al objeto. En este caso: this = miAuto
};


console.log(miAuto.detalleDelAuto());