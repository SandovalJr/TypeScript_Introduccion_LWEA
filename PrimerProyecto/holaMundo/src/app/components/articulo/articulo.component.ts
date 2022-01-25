import { Component, OnInit } from '@angular/core';

interface articulo {
  nombre: string;
  description: string;
  precio: number;
}

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent implements OnInit {
  Articulos: Array<articulo> = new Array<articulo>();

  constructor() {}

  ngOnInit(): void {
    this.Articulos.push(
      {
        nombre: 'televisor',
        description: '4K Marca Dell con 4 anios de garantia',
        precio: 45000,
      },
      {
        nombre: 'OMEN LAPTOP',
        description: '4K Marca HP con 4 anios de garantia',
        precio: 45000,
      },
      {
        nombre: 'ALIEN WARE',
        description: '4K Marca Dell con 4 anios de garantia',
        precio: 45000,
      }
    );
  }
}
