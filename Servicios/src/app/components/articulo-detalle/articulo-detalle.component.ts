import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.sass']
})
export class ArticuloDetalleComponent implements OnInit {

  constructor(public articuloInyectado: ArticulosService) { }

  ngOnInit(): void {
  }

}
