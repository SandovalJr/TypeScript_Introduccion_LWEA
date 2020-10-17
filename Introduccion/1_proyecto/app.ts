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
var nombre: string = "SANDOVAL";
console.log(nombre);

// BOOLEAN
var b1: boolean = false;
var b2: boolean = true;

// OBJETOS
var persona = {
  nombre: "fernanda",
  apellido: "Garcia",
  edad: 16,
  peso: 50,
};
console.log(persona);

// INTERFACES
interface personaInterface {
  nombre: string;
  apellido: string;
  edad: number;
}

var p1: personaInterface = {
  nombre: "fer",
  apellido: "garcia",
  edad: 20,
};
console.log(p1.nombre);

// SWITCH

var cantidad: number = 25;

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
var nombre:string;
var edad:number = 18;

nombre = edad > 10 ? "lalo" : "No se cumplo" 

console.log(nombre);

