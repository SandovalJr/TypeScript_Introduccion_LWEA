import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  titulo: string = 'Hola soy un titulo';
  dinero: number = 6500;
  porcentaje: number = 0.88;
  fecha: Date = new Date('1999-08-25');
  textolargo: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, magni expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, magni expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, magni expedita';

  constructor() {}

  ngOnInit(): void {}
}
