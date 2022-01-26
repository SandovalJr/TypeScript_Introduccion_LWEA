import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articulo } from '../../models/articulo.interface';
@Component({
  selector: 'app-articulo-detalles',
  templateUrl: './articulo-detalles.component.html',
  styleUrls: ['./articulo-detalles.component.scss'],
})
export class ArticuloDetallesComponent implements OnInit {
  // nombre_recibido: string;
  // price_recibido: number;
  art: articulo;
  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.ruta.snapshot.params.nombre);
    // this.nombre_recibido = this.ruta.snapshot.params.nombre;
    // this.price_recibido= this.ruta.snapshot.params.price;
    // this.art = this.ruta.snapshot.params.articulo;
    console.log(this.ruta.snapshot.params.articulo);
  }
}
