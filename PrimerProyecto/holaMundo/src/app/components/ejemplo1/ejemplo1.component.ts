import { Component, OnInit } from '@angular/core';

class Alumno {
  nombre: string;
  apellido: string;
  constructor() {
    this.nombre = this.nombre;
    this.apellido = this.apellido;
  }
}

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.scss'],
})
export class Ejemplo1Component implements OnInit {
  //CREAMOS LA INSTANCIA
  alumno: Alumno = new Alumno();
  listadoAlumnos: Array<Alumno> = new Array<Alumno>();

  constructor() {}

  ngOnInit(): void {}

  agregar() {
    this.listadoAlumnos.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido,
    });
    this.alumno.nombre = '';
    this.alumno.apellido = '';

    console.log(this.listadoAlumnos);

  }
}
