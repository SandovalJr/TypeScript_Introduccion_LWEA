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

  ingresar(event) {
    if(event.key == "Enter"){
      console.log("ingresando a sistema");
    } else {

    }
    //console.log(this.correo + ' BIENVENIDO');
  }

llamarAlert(){
  alert('Presionaste doble click')
}

EscribirModelo(){
console.log(this.password);
}

EscribirCorreo(){
  this.password = this.correo
 console.log(this.correo);
 console.log(this.password);
}

escribir(evento){
  console.log(evento.target.value);
}

// focus nos sirve para realizar una accion cuando nosotros ingresamos a un elemento
colorearfondo(evento){
  evento.srcElement.style.background = 'red'
  evento.srcElement.style.width =  "500px"
}

CambiarTamano(event){
  event.srcElement.style.width = "100px"
  event.srcElement.style.border = "1px solid red"
}
incrementartamano(event){
  event.srcElement.style.width = "500px"
  event.srcElement.style.border = "1px solid blue"
}

}
