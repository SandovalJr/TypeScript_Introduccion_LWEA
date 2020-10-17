// CONSOLAS
console.log("Bienvenidos");
console.warn("AVISO IMPORTANTE");
console.error("ERROR");

console.clear();

// NUMEROS
var edad: number = 13;
var puntos: number = 15;
console.log(edad + puntos);

// TEXTOS
var nombre:string = "SANDOVAL";
console.log(nombre);

// BOOLEAN
var b1:boolean = false;
var b2:boolean = true;

// OBJETOS
var persona = {
    nombre:'fernanda',
    apellido:'Garcia',
    edad: 16,
    peso:50,
}
console.log(persona);

// Interfaces
interface personaInterface {
    nombre:string,
    apellido:string,
    edad:number,
}

var p1:personaInterface= {
    nombre:"fer",
    apellido: "garcia",
    edad:20
}
 
console.log(p1.nombre);
