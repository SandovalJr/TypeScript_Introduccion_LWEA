import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Articulo } from '../../models/articulo.model';
@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.sass'],
})
export class ArticuloDetalleComponent implements OnInit {
  articulosObservable: Array<Articulo> = new Array<Articulo>();
  constructor(public articuloInyectado: ArticulosService) {


  }

  ngOnInit(): void {
    

  }
}
