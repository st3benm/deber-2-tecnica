function Letras(empleado) {
    const nombre = empleado.nombre
    const longitud = nombre.length
    console.log(`${nombre} tiene ${longitud} letras `)

}
function uno() {
    const empleado = { nombre: "Ana", "edad": 25 }
    Letras(empleado)
}
function vocal(letra, producto) {
    let cv = 0;
    let nombre = producto.nombre
    for (let c = 0; c < nombre.length; c++) {
        if (nombre[c] === letra) {
            cv++


        }

    }
    console.log(`${nombre} ${cv} veces ${letra} `)
}

function dos() {
    const letra = "o"
    const producto = { nombre: "Programador", precio: 100 }
    vocal(letra, producto)
}




function palindroma(persona) {

    let nombre = persona.nombre
    let invertido = "";
    for (let c = nombre.length - 1; c >= 0; c--) {
        invertido += nombre[c];
    }
    console.log(`Su nombre ${nombre} en invertido:${invertido}`)
}
function tres() {
    const persona = { nombre: "Carlos", edad: 30 }
    palindroma(persona)
}
function longitud(empleado1, empleado2) {
    let nombre1 = empleado1.nombre
    let nombre2 = empleado2.nombre
    if (nombre1.length > nombre2.length) {
        return nombre1
    } else if (nombre2.length > nombre1.length) {
        return nombre2

    } else {
        return "Ambos tienen la misma longitud"
    }

}

function cuatro() {
    const empleado1 = { nombre: "María", edad: 28 }
    const empleado2 = { nombre: "Guillermo", edad: 35 }


    let resultado = longitud(empleado1, empleado2)
    console.log(`El nombre mas largo es ${resultado}`)
}




function inicial(empleado) {
    let nombreCompleto = empleado.cargo
    let iniciales = nombreCompleto[0] + "."
    for (let c = 1; c < nombreCompleto.length; c++) {
        if (nombreCompleto[c - 1] === ' ') {
            iniciales += nombreCompleto[c] + "."



        }

    }
    console.log(`Las iniciales son ${iniciales}`)
}
function cinco() {
    const empleado = { cargo: "Director General Académico" }
    inicial(empleado)
}


//BLOQUE 2 
function contarCaracteres() {
    const empleados = [
        { nombre: "Ana", "edad": 22 },
        { nombre: "Santiago", edad: 30 },
        { nombre: "Rosa", edad: 27 }
    ]
    for (let i = 0; i < empleados.length; i++) {
        let nombres = empleados[i]
        Letras(nombres)
    }

}

function contarVocales() {
    const empleados = [
        { nombre: "Andrea" },
        { nombre: "Marcos" },
        { nombre: "Lucía" }
    ]
    const letra = "a"
    for (let c = 0; c < empleados.length; c++) {
        let nombres = empleados[c]
        vocal(letra, nombres)

    }


}
function invertirEmpleados() {
    const empleados = [
        { nombre: "Luis" },
        { nombre: "Carmen" },
        { nombre: "Pedro" }
    ]
    for (let j = 0; j < empleados.length; j++) {
        let nombres = empleados[j]
        palindroma(nombres)

    }

}
function compararLongitudes() {
    const empleados = [
        { nombre: "Carlos", ciudad: "Milagro" },
        { nombre: "Andrea", ciudad: "Guayaquil" },
        { nombre: "José", ciudad: "Quito" }
    ]
    let ganador12 = longitud(
        { nombre: empleados[0].ciudad },
        { nombre: empleados[1].ciudad },
    )
    if (ganador12 === "Ambos tienen la misma longitud") {
        ganador12 = empleados[0].ciudad
    }
    const ganadorFinal = longitud(
        { nombre: ganador12 },
        { nombre: empleados[2].ciudad }
    )
    console.log(`La ciudad con mayor longitud es: ${ganadorFinal}`)
}

function cargos() {
    const empleados = [
        { cargo: "Director General Académico" },
        { cargo: "Jefe de Laboratorio" },
        { cargo: "Asistente Administrativo" }
    ]
    for (let c = 0; c < empleados.length; c++) {
        let nombres = empleados[c]
        inicial(nombres)
    }

}
//BLOQUE 3 
function promedio() {
    const empleados = [
        { nombre: "Ana", nota: 65 },
        { nombre: "Luis", nota: 80 },
        { nombre: "Carla", nota: 90 },
        { nombre: "José", nota: 50 },
        { nombre: "Marta", nota: 75 }
    ]
    let cv = 0;
    let suma = 0
    for (let c = 0; c < empleados.length; c++) {
        const nota = empleados[c].nota
        if (nota >= 70) {
            cv++
            suma += nota
        }
    }
    const promedio = (suma / cv)
    console.log(`Promedios de notas >=70 es:${promedio}`)
}
function edadEquivocada() {
    const empleados = [
        { nombre: "Ana", edad: 22 },
        { nombre: "Luis", edad: -5 },
        { nombre: "Carla", edad: 0 }
    ]
    for(let c=0;c<empleados.length;c++){
        let nombre=empleados[c].nombre
        if(nombre<=0  ){
            
        }
    }

}