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
  usuario: any;
  id: any;

  constructor(public articuloInyectado: ArticulosService) {
    this.recibeInfo = this.articuloInyectado.getinfo1articulo();
    this.id = this.recibeInfo.id;
  }

  ngAfterContentInit() {
    this.articuloInyectado
      .leeruser(this.recibeInfo.id)
      .subscribe((usuarioDesdeAPI) => {
        // if (usuarioDesdeAPI != undefined) {
        this.usuario = usuarioDesdeAPI;
        // console.log(usuarioDesdeAPI);
        // }
      });
  }

  ngOnInit(): void {}
}
