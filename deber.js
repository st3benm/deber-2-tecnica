function Letras() {
    const empleado = { nombre: "Ana", "edad": 25 }
    console.log(`Ana tiene ${empleado.nombre.length} letras `)

}
function vocal() {
    let letra = "o"
    const producto = { nombre: "Programador", precio: 100 }
    let cv = 0;
    let nombre = producto.nombre
    for (let c = 0; c < nombre.length; c++) {
        if (nombre[c] === letra) {
            cv++


        }

    }
    console.log(`Su palabra ${nombre} tiene ${cv} letras ${letra}`)

}




function palindroma() {
    const persona = { nombre: "Carlos", edad: 30 }
    let nombre = persona.nombre
    invertido = "";
    for (let c = nombre.length - 1; c >= 0; c--) {
        invertido += nombre[c];
    }
    if (nombre === invertido) {
        console.log(`Su palabra ${nombre} es invertida`)
    } else {
        console.log(`Su palabra ${nombre} no es invertido`)
    }

}
function longitud() {
    const empleado1 = { nombre: "María", edad: 28 }
    const empleado2 = { nombre: "Guillermo", edad: 35 }
    let nombre1 = empleado1.nombre
    let nombre2 = empleado2.nombre
    if (nombre1 > nombre2) {
        console.log(`El nombre ${nombre1} es mas largo con ${nombre1.length}`)
    } else {
        console.log(`El nombre ${nombre2}es mas largo con ${nombre2.length}`)
    }


}

function inicial() {
    const empleado = {cargo: "Director General Académico" }
    let nombreCompleto = empleado.cargo
    let iniciales=nombreCompleto[0]+ "."
    for (let c = 1; c < nombreCompleto.length; c++) {
        if (nombreCompleto[c-1] === ' ') {
            iniciales+=nombreCompleto[c]+"."


            
        }

    }
    console.log(`Las iniciales son ${iniciales}`)


}
//BLOQUE 2 
