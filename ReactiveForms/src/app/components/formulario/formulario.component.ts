import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass'],
})
export class FormularioComponent implements OnInit {
  formularioCreado: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioCreado = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });

  }

  ngOnInit(): void {}

  agregar() {
    console.log(this.formularioCreado.value);
  }
}
