class Alumnos {
  nombre: string;
  apellido: string;
  peso: number;


constructor (){
    this.mostrarMensaje();
}


  mostrarMensaje() {
    console.log(`hola ${this.nombre} ${this.apellido}`);
  }

  asignar(nombreParametro: string, apellidoP: string, pesoP: number) {
    this.nombre = nombreParametro;
    this.apellido = apellidoP;
    this.peso = pesoP;
    // console.log(this.nombre);
    
  }
}

var alumno1: Alumnos = new Alumnos();
alumno1.nombre = "juan";
alumno1.apellido = "sandoval";
alumno1.peso = 200;

// alumno1.mostrarMensaje();

var alumno2: Alumnos = new Alumnos();
alumno2.asignar("lalo", "sandoval", 200);
// alumno2.mostrarMensaje();

var alumno3: Alumnos = new Alumnos();
alumno3.asignar("maria", "garcia", 55);
// alumno3.mostrarMensaje();

