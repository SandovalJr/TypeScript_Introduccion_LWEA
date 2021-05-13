var nombres = ["ana", "maria", "juana"];
var numeros = [15, 23, 54];
var alumnos = [];
alumnos.push({ nombre: "Ana maria", apellido: "sandoval", id: 3 });
// console.log(alumnos);
// SPLICE
// nombres.splice(1)
// Funciones Anonimas
console.log(nombres);
nombres.forEach(function (nombre) {
    // if(nombre == "ana"){
    //     console.log(nombre);
    // }
});
alumnos.push({
    nombre: "Eduardo",
    apellido: "Garcia",
    id: 1
}, {
    nombre: "victor",
    apellido: "franco",
    id: 2
});
alumnos.forEach(function (datos) {
    console.log(datos.nombre);
});
console.log(alumnos);
// Metodo Find
var busquedaAlumno = alumnos.find(function (alumno) {
    // console.log(alumno);
    // El includes sirve para buscar con ciertas letras una palabra completa
    return alumno.nombre.includes("ardo");
    // return alumno.id ==2;
});
console.log('El alumno encontrado es: ' + busquedaAlumno.nombre);
