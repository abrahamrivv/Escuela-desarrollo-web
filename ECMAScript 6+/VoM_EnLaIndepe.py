username = input('¿Cómo te llamas?: ')
lugar = str(input('¿A dónde quieres ir? La indepe, San Pedro, San Juan de DIOS, Reynosa: ')) 

def vivir_morir(lugar):
    if lugar == 'La indepe':
        print(username + ' ' + 'Te navajearon')
    elif lugar == 'San Pedro':
        print(username + ' ' + 'Que onda paps, vamos al mall' +'(Te salvaste wey)')
    elif lugar == 'San Juan de DIOS':
        print(username + ' ' + 'Te robaron la cartera y te dejaron un hijo')
    elif lugar == 'Reynosa':
        print(username + ' ' + 'Ni llegaste qlero')
    else:
        print('CHINGAS A TU MADRE QLERO ESCRIBE ALGO' + ' ' + username)

vivir_morir(lugar)