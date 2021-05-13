// CONSOLAS
console.log("Bienvenidos");
console.warn("AVISO IMPORTANTE");
console.error("ERROR");
console.clear();
// NUMEROS
var edad = 13;
var puntos = 15;
console.log(edad + puntos);
// TEXTOS
var nombre = "SANDOVAL";
console.log(nombre);
// BOOLEAN
var b1 = false;
var b2 = true;
// OBJETOS
var persona = {
    nombre: "fernanda",
    apellido: "Garcia",
    edad: 16,
    peso: 50
};
console.log(persona);
var p1 = {
    nombre: "fer",
    apellido: "garcia",
    edad: 20
};
console.log(p1.nombre);
// SWITCH
var cantidad = 25;
// debugger
switch (cantidad) {
    case 10:
        console.log("cantidad es 10");
        break;
    case 25:
        console.log("cantidad es 25");
        break;
}
// IF TERNARIOS
var nombre;
var edad = 18;
nombre = edad > 10 ? "lalo" : "No se cumplo";
console.log(nombre);
var listadoUsuarios = [
    {
        nombre: "ana",
        apellido: "sandoval"
    },
    {
        nombre: "lalo",
        apellido: "sandoval"
    }, {
        nombre: "fern",
        apellido: "garcia"
    }
];
// for of
for (var _i = 0, listadoUsuarios_1 = listadoUsuarios; _i < listadoUsuarios_1.length; _i++) {
    var usuario = listadoUsuarios_1[_i];
    console.log(usuario.nombre);
}
// for in
