import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Articulo } from '../../models/articulo.model';
@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.sass'],
})
export class ArticuloDetalleComponent implements OnInit {
  articulosObservable: any;

  constructor(public articuloInyectado: ArticulosService) {
    this.articulosObservable = this.articuloInyectado.ArticuloNoticias;
    console.log(this.articulosObservable);
    
  }

  ngOnInit(): void {}
}
