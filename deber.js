function Letras() {
    const empleado = { nombre: "Ana", "edad": 25 }
    console.log(`Ana tiene ${empleado.nombre.length} letras `)

}
function vocal(letra) {
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

let letra = "o"
vocal(letra);

function palindroma() {
    const persona = { nombre: "Carlos", edad: 30 }
    let nombre=persona.nombre
    invertido="";
    for(let c=nombre.length-1 ;c>=0;c--){
    invertido+=nombre[c];
    }
    if(nombre===invertido){
        console.log(`Su palabra ${nombre} es invertida`)
    } else{
        console.log(`Su palabra ${nombre} no es invertido`)
    }

}
