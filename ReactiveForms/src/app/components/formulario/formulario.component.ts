import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

interface usuario {
  nombre: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass'],
})
export class FormularioComponent implements OnInit {
  formularioCreado: FormGroup;
  esNuevo: boolean = true;
  usuarios: Array<usuario> = new Array<usuario>();

  constructor(private fb: FormBuilder) {
    this.formularioCreado = this.fb.group({
      nombre: ['Carmen', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        'password',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  ngOnInit(): void {}

  agregar() {
    console.log(this.formularioCreado.value);
    this.usuarios.push(this.formularioCreado.value as usuario);
    //borrar los campos anteriores para que el nuevo usuario se pueda registrar
    this.formularioCreado.reset();
  }

  editarUsuario(pos: number) {
    // this.usuarios[pos].nombre = 'A';
    // this.usuarios[pos].email = 'prueba@gmail.com';
    // this.usuarios[pos].password = 'sandoval1234';

    this.formularioCreado.setValue({
      nombre: this.usuarios[pos].nombre,
      email: this.usuarios[pos].email,
      password: this.usuarios[pos].password,
    });
    this.esNuevo = false;
  }
}
