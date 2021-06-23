var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
// FOR
//for (var i = 0; i < estudiantes.length; i++){
    //saludarEstudiantes(estudiantes[i]);
//}

// FOR OF
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// ejemplo
let insultos = ['puto', 'pendejo', 'idiota']

function insultarGente(insulto){
    console.log(`ERES UN ${insulto}`)
}


for (let insulto of insultos){
    insultarGente(insulto)
}
