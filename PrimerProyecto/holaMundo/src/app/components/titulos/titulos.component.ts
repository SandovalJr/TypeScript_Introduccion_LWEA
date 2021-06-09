import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss'],
})
export class TitulosComponent implements OnInit {
  titulo = 'HOLA MUNDO!';

  alumno: any = {
    nombre: 'carlos',
    apellido: 'sandoval',
  };

  inputN: string = 'hola soy un input ';
  imagen: string =
    'https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/AcjaXqwZzggGiKLFdEfHMp0H.png';

  correo: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  ingresar() {
    console.log(this.correo + ' BIENVENIDO');
  }


}
