import { Component, OnInit } from '@angular/core';

interface Productos {
  nombre: string;
  stock: number;
  fabricante: string;
  fechaVence: Date;
}

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss'],
})
export class DirectivasComponent implements OnInit {
  loading: boolean = true;
  nombresArray: Array<string> = [
    'Eduardo',
    'Victor',
    'Angelica',
    'Ashley',
    'Axel',
  ];

  pestana: string = '';

  ArrayDeProductos: Array<Productos> = [
    {
      nombre: 'Arroz',
      stock: 25,
      fabricante: 'Distribuidor OXXO',
      fechaVence: new Date('05/07/2021'),
    },
    {
      nombre: 'Pollo',
      stock: 13,
      fabricante: 'Distribuidor GM',
      fechaVence: new Date('05/07/2021'),
    },
    {
      nombre: 'Res',
      stock: 11,
      fabricante: 'Distribuidor holis',
      fechaVence: new Date('30/08/2021'),
    },
    {
      nombre: 'Azucar Kilos',
      stock: 54,
      fabricante: 'Distribuidor OXXO',
      fechaVence: new Date('25/07/2021'),
    },
    {
      nombre: 'Jitomates',
      stock: 23,
      fabricante: 'Distribuidor OXXO',
      fechaVence: new Date('10/07/2021'),
    },
  ];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  showLoading() {
    //vas a ser el loading pero cambiaras el valor que tiene actualmente
    this.loading = !this.loading;

  }

cambiarPestana (pestana:string){
  this.pestana = pestana;
}

}
