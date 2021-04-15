var signo = prompt('¿cuál es tu signo?')

switch (signo){
    case 'aries' : 
    console.log('Los Aries son, de todos los signos, los que más cómodos se sienten comenzando nuevos proyectos.')
    break
    case 'tauro' : 
    console.log('Los nacidos bajo este signo no se andan con chiquitas, lo suyo no son las aventuras y los romances breves')
    break
    case 'geminis' : 
    console.log('Las relaciones pueden llegar a ser muy complicadas para un Géminis.')
    break
    case 'cancer' : 
    console.log('Los Cáncer tienen una gran tendencia a vivir en el pasado y esto se acentúa aún más cuando están solteros aunque, por el contrario, cuando están en una relación sana, se suelen concentrar más en el futuro próximo y se esfuerzan por cumplir todas sus metas.')
    break
    case 'leo' : 
    console.log('Se dice que los Leo son los más fáciles de reconocer a simple vista por tener un carácter muy marcado, y suele ser verdad.')
    break
    case 'virgo' : 
    console.log('Una de las principales características de los nacidos bajo este signo es su forma lógica y estructurada de hacer las cosas. ')
    break
    case 'libra' : 
    console.log('La característica más inherente a los Libra es que son personas a las que les cuesta muchísimo tomar decisiones sea cual sea la magnitud de estas.')
    break
    case 'escorpio' : 
    console.log('No hay nada ni nadie más intenso y curioso que un Escorpio. Son personas muy introvertidas, reflexivas y, a menudo, existencialistas. ')
    break
    case 'sagitario' : 
    console.log('Los Sagitario tienen una gran confianza en sí mismos y a menudo son el alma de la fiesta.')
    break
    case 'capricornio' : 
    console.log('Los Capricornio tienen una gran necesidad de sentirse aceptados e incluidos y mantener un buen estatus social. ')
    break
    case 'acuario' : 
    console.log('Los Acuario son los más populares del patio y tienen un don de gentes natural que les hace conquistar cualquier evento social.')
    break
    case 'piscis' : 
    console.log('Los Piscis son idealistas y soñadores de nacimiento.')
    break

    default: // es como un else, se ejecuta cuando ninguno de los casos se encuentra
        console.log('No es un signo zodiacal válido')
    break
}