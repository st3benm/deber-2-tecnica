function Letras(empleado) {
    const nombre = empleado.nombre      //SACAMOS EK NOMBRE DEL OBJETO Y LA PONEMOS EN UNA VARIABLE 
    const longitud = nombre.length
    console.log(`${nombre} tiene ${longitud} letras `) //Y LA PRESENTAMOS 

}
function uno() {
    const empleado = { nombre: "Ana", "edad": 25 }      //PALINDROMA 
    Letras(empleado)
}
function vocal(letra, producto) {
    let cv = 0;
    let nombre = producto.nombre                //PONEMOS PRIMERAMETE UN CONTADOR PARA CUANDO ENCUENTRE LA LETRA LA SUME 
    for (let c = 0; c < nombre.length; c++) {   //RECORREMOS EL NOMBRE Y HALLAMOS LA LETRA 
        if (nombre[c] === letra) {
            cv++


        }

    }
    console.log(`${nombre} ${cv} veces ${letra} `)  //RESULTADO
}

function dos() {
    const letra = "o"
    const producto = { nombre: "Programador", precio: 100 }//PALIDROMA 
    vocal(letra, producto)
}




function palindroma(persona) {              //AQUI EN LA FUNCION PALINDROMA TENEMOS ALGO CURIOSO 

    let nombre = persona.nombre
    let invertido = "";                     // CREAMOS UNA VARIABLE VACIA PARA GUARDAR EL RETROCESO
    for (let c = nombre.length - 1; c >= 0; c--) {      //AQUI ESTA LO CURIOSO EL FOR SOLO ES PARA RECORRER LA PALABRA AL REVEZ 
        invertido += nombre[c];             //Y COLACAMOS EN INVERTIDO
    }
    console.log(`Su nombre ${nombre} en invertido:${invertido}`) //PRESENTAMOS 
}
function tres() {
    const persona = { nombre: "Carlos", edad: 30 }  //PALINDROMA
    palindroma(persona)
}
function longitud(empleado1, empleado2) {       //TENEMOS UNA FUNCION PALINDROMA 
    let nombre1 = empleado1.nombre              //LE PONEMOS VARIABLES A LOS NOMBRES QUE NOS MANDARON
    let nombre2 = empleado2.nombre
    if (nombre1.length > nombre2.length) {          //UTILIZAMOS RETURN PORQUE QUEREMOS GUARDAR EL RESULTADO 
        return nombre1
    } else if (nombre2.length > nombre1.length) {   //LA CONDICIONAL PARA SABER Y LA QUE SE CUMPLE ME RETORNA 
        return nombre2

    } else {
        return "Ambos tienen la misma longitud"
    }

}

function cuatro() {
    const empleado1 = { nombre: "María", edad: 28 }     //PALINDROMAS 
    const empleado2 = { nombre: "Guillermo", edad: 35 }


    let resultado = longitud(empleado1, empleado2)      //LE PONEMOS NOMBRE AL VALOR RETORNADO 
    console.log(`El nombre mas largo es ${resultado}`)      //PRESENTAMOS 
}




function inicial(empleado) {
    let nombreCompleto = empleado.cargo     //EXTRAEMOS DEL OBJETO EL NOMBRE 
    let iniciales = nombreCompleto[0] + "."         //COMO YA TENEMOS UN NOMBRE QUE VA PRIMERO LE PONEMOS NOMBRE     
    for (let c = 1; c < nombreCompleto.length; c++) {   //RECORREMOS EL NOMBRE 
        if (nombreCompleto[c - 1] === ' ') {            //PONEMOS UNA CONDICION QUE SI  EL NOMBRE TIENE ANTES UN ESPACIO QUE GUARDE 
            iniciales += nombreCompleto[c] + "."        //AHORA GUARDAMOS EN INICIALES 



        }

    }
    console.log(`Las iniciales son ${iniciales}`)           //PRESENTAMOS 
}
function cinco() {
    const empleado = { cargo: "Director General Académico" }        //PALINDROMA
    inicial(empleado)
}


//BLOQUE 2 
function contarCaracteres() {
    const empleados = [                             //SIMPLEMENTE POENEOS NUESTTRO OBJETO 
        { nombre: "Ana", "edad": 22 },
        { nombre: "Santiago", edad: 30 },
        { nombre: "Rosa", edad: 27 }
    ]
    for (let i = 0; i < empleados.length; i++) {        //PONEMOS UN FOR PARA RECORRER EL OBJETO 
        let nombres = empleados[i]          //Y LO MANDAMOS CON UN NOMBRE
        Letras(nombres)                 //Y LLAMAMOS A OTRA FUNCION QUE YA TIENE HECHO EL CODIGO 
    }

}

function contarVocales() {
    const empleados = [
        { nombre: "Andrea" },           //RECORREMOS NUESTRO OBJETO CON EL FOR 
        { nombre: "Marcos" },
        { nombre: "Lucía" }
    ]
    const letra = "a"
    for (let c = 0; c < empleados.length; c++) {    //Y MANDAMOS A NUESTRA FUNCION QUE VAMOS A RECICLAR 
        let nombres = empleados[c]
        vocal(letra, nombres)

    }


}
function invertirEmpleados() {  //MISMO PROCEDIMIENTO 
    const empleados = [
        { nombre: "Luis" },
        { nombre: "Carmen" },
        { nombre: "Pedro" }
    ]
    for (let j = 0; j < empleados.length; j++) {
        let nombres = empleados[j]
        palindroma(nombres)             //MANDAMOS TODO A  NUESTRA FUNCION 

    }

}
function compararLongitudes() {
    const empleados = [
        { nombre: "Carlos", ciudad: "Milagro" },
        { nombre: "Andrea", ciudad: "Guayaquil" },  //TENEMOS 3 NOMBRES 
        { nombre: "José", ciudad: "Quito" }
    ]
    let ganador12 = longitud(
        { nombre: empleados[0].ciudad },   //MANDAMOS NUESTRA FUNCION A LA RECICLADA 
        { nombre: empleados[1].ciudad },
    )
    if (ganador12 === "Ambos tienen la misma longitud") {   //SI LLEGAM HACER IGUALES ESCOGEMOS LA PRIMERA POR JERARQUIA 
        ganador12 = empleados[0].ciudad
    }
    const ganadorFinal = longitud(  //Y MANDAMOS DE NUEVO A NUESTRA GANADORA DE LA PRIMERA Y LA CIUDAD RESTANTE 
        { nombre: ganador12 },
        { nombre: empleados[2].ciudad }
    )
    console.log(`La ciudad con mayor longitud es: ${ganadorFinal}`) //PRESENTAMOS LA GANADORA
}

function cargos() {
    const empleados = [
        { cargo: "Director General Académico" },
        { cargo: "Jefe de Laboratorio" },
        { cargo: "Asistente Administrativo" }
    ]
    for (let c = 0; c < empleados.length; c++) {    //RECORREMOS EL OBJETO 
        let nombres = empleados[c]          //Y LO MANDAMOS A NUESTRA FUNCION QUE VA A RECICLAR 
        inicial(nombres)
    }

}
//BLOQUE 3 
function promedio(empleados) {
    let suma = 0                      //PONEMOS UN CONTADOR 
    let cv = 0;                                     //Y UNA VARIABLE PARA GUARDAR
    for (let c = 0; c < empleados.length; c++) {
        const nota = empleados[c].nota                  //RECORREMOS EL OBJETO 
        if (nota >= 70) {
            cv++
            suma += nota
        }
    }
    const promedio = (suma / cv)
    console.log(`Promedios de notas >=70 es:${promedio}`)
}
function UNOS() {
    const empleados = [
        { nombre: "Ana", nota: 65 },
        { nombre: "Luis", nota: 80 },
        { nombre: "Carla", nota: 90 },
        { nombre: "José", nota: 50 },
        { nombre: "Marta", nota: 75 }
    ]
    promedio(empleados)
}
function edadEquivocada(empleados) {
    let cv = 0;
    for (let c = 0; c < empleados.length; c++) {
        let edad = empleados[c].edad
        if (edad <= 0) {
            cv++

        }
    }
    console.log(`Edades invalidas ${cv}`)
}
function DOCES() {
    const empleados = [
        { nombre: "Ana", edad: 22 },
        { nombre: "Luis", edad: -5 },
        { nombre: "Carla", edad: 0 }
    ]
    edadEquivocada(empleados)
}
function separacion(empleados) {
    let cv = 0;
    let cb = 0;
    let suma = 0;
    let sumo = 0;
    for (let c = 0; c < empleados.length; c++) {
        edad = empleados[c].edad
        if (edad < 18) {
            cv++
            suma += edad

        } else if (edad >= 18) {
            cb++
            sumo += edad

        }
    }
    let promedioMenor = (suma / cv)
    let promedioMayor = (sumo / cv)
    console.log(`Promedio de menores:${promedioMenor}`)
    console.log(`Promedio de mayores:${promedioMayor}`)
}
function TRECES(){
    const empleados = [
        { nombre: "Ana", edad: 17 },
        { nombre: "Luis", edad: 20 },
        { nombre: "Carla", edad: 35 },
        { nombre: "José", edad: 15 },
        { nombre: "Marta", edad: 18 }
    ]
    separacion(empleados)


}

function multiplicar() {
    const empleado = { nombre: "Luis", salario: 300 }
    return empleado.salario

}

function multiplicarDos() {
    let numero = multiplicar();
    for (let c = 1; c <= 10; c++) {
        console.log(`${c}*${numero}=${c * numero}`);

    }

}
function pares(empleados) {
    let cv = 0;
    let cb = 0;
    let suma = 0;
    let sumo = 0;
    for (let c = 0; c < empleados.length; c++) {
        let salario = empleados[c].salario

        if (salario % 2 === 0) {
            cv++
            suma += salario

        } else if (!salario % 2 === 0) {
            cb++
            sumo += salario
        }

    }
    let promedioPares = (suma / cv)
    let promedioImpares = (sumo / cb)
    console.log(`Promedio de Pares:${promedioPares}`)
    console.log(`Promedio de Impares:${promedioImpares}`)
}
function CUATROSS(){
     const empleados = [
        { nombre: "Ana", salario: 450 },
        { nombre: "Luis", salario: 500 },
        { nombre: "Carla", salario: 625 },
        { nombre: "José", salario: 800 },
        { nombre: "Marta", salario: 705 }
    ]
    pares(empleados)
}