//haremos arrays con objetos adentro

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500 //filter filtra cosas especificas que le pidamos, como en este caso traer los que cuesten 500 o menos
});

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre //map mapea todo el contenido del array y trae lo que estamos buscando, en este caso solo los nombres de los articulos
});

var encuentraArticulo = articulos.find(function(articulo){//El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(articulo){//se puede usar para ecommerce para filtrar precios, productos, etc que el usuario busque
    console.log(articulo.nombre);
    console.log(articulo.costo);
});

var articulosBaratos = articulos.some(function(articulo){//esto solo es una validacion de T or F, dice si existe el parametro que estamos busscando, en este caso buscamos si existen productos menores de 700 o igules, y si existen por eso el valor es true
    return articulo.costo <= 700
});

console.log(articulosFiltrados);
console.log(nombreArticulos);
console.log(encuentraArticulo);
console.log(articulosBaratos);