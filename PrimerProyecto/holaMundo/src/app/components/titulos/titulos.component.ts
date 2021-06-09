import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

titulo = 'HOLA MUNDO!'

alumno: any  = {
  nombre:'carlos',
  apellido:'sandoval'
}



  constructor() { }

  ngOnInit(): void {
  }

}
