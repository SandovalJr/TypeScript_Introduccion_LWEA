import { Component, Input, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Articulo } from '../../models/articulo.model';
@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.sass'],
})
export class ArticuloDetalleComponent implements OnInit {
  recibeInfo: any;
  constructor(public articuloInyectado: ArticulosService) {}

  ngOnInit(): void {
    this.recibeInfo = this.articuloInyectado.getinfo1articulo();
    
    console.log(this.recibeInfo);
    
  }
}
