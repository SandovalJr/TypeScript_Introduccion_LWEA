var Alumnos = /** @class */ (function () {
    function Alumnos() {
        this.mostrarMensaje();
    }
    Alumnos.prototype.mostrarMensaje = function () {
        console.log("hola " + this.nombre + " " + this.apellido);
    };
    Alumnos.prototype.asignar = function (nombreParametro, apellidoP, pesoP) {
        this.nombre = nombreParametro;
        this.apellido = apellidoP;
        this.peso = pesoP;
        // console.log(this.nombre);
    };
    return Alumnos;
}());
var alumno1 = new Alumnos();
alumno1.nombre = "juan";
alumno1.apellido = "sandoval";
alumno1.peso = 200;
// alumno1.mostrarMensaje();
var alumno2 = new Alumnos();
alumno2.asignar("lalo", "sandoval", 200);
// alumno2.mostrarMensaje();
var alumno3 = new Alumnos();
alumno3.asignar("maria", "garcia", 55);
// alumno3.mostrarMensaje();
