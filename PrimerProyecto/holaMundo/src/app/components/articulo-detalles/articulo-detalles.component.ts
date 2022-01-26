import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo-detalles',
  templateUrl: './articulo-detalles.component.html',
  styleUrls: ['./articulo-detalles.component.scss'],
})
export class ArticuloDetallesComponent implements OnInit {
  nombre_recibido: string;
  price_recibido: number;

  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.ruta.snapshot.params.nombre);
    this.nombre_recibido = this.ruta.snapshot.params.nombre;
    this.price_recibido= this.ruta.snapshot.params.price;

  }
}
