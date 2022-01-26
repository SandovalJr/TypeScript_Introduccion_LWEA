import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { articulo } from '../../models/articulo.interface';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent implements OnInit {
  Articulos: Array<articulo> = new Array<articulo>();

  constructor(private rutaArt: Router) {}

  ngOnInit(): void {
    this.Articulos.push(
      {
        nombre: 'televisor',
        description: '4K Marca Dell con 4 anios de garantia',
        stock: 45,
        precio: 45000,
        precio_mayorista: 35000,
      },
      {
        nombre: 'OMEN LAPTOP',
        description: '4K Marca HP con 4 anios de garantia',
        stock: 11,

        precio: 45000,
        precio_mayorista: 35000,
      },
      {
        nombre: 'ALIEN WARE',
        description: '4K Marca Dell con 4 anios de garantia',
        stock: 80,

        precio: 45000,
        precio_mayorista: 35000,
      }
    );
  }

  pasarParametro(Articulo_recibido: articulo) {
    console.log(Articulo_recibido);
    this.rutaArt.navigate([
      'articuloDetalle',
      { articulo_enviado: JSON.stringify(Articulo_recibido) },
    ]);
  }
}
