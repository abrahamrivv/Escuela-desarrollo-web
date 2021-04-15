var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log('Hola ', estudiante);
}

while (estudiantes.lenght > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
// de momento no me ha funcionado, revisar porque no funciona