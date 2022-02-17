import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo, articulo } from 'src/app/models/articulo.model';
import { ArticulosService } from 'src/app/services/articulos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  articulos: Array<articulo> = new Array<articulo>();
  articulosObservable: Array<Articulo> = new Array<Articulo>();

  constructor(
    public usuarioInyectado: UsuariosService,
    private ruta: Router,
    public ArticulosService: ArticulosService
  ) {}

  ngOnInit(): void {
    this.ArticulosService.leerNoticias().subscribe((articulosDesdeApi) => {
      this.articulosObservable = articulosDesdeApi;
    });
    this.enviarInfoAlServicio();

    //////////////////////////////////////////////
    // this.articulos.push(
    //   {
    //     titulo: 'java 1',
    //     descripcion: 'descripcion 1',
    //     fecha: new Date('04/05/2020'),
    //     usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`,
    //   },
    //   {
    //     titulo: 'java 2',
    //     descripcion: 'descripcion 2',
    //     fecha: new Date('08/12/2019'),
    //     usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`,
    //   },
    //   {
    //     titulo: 'java 3',
    //     descripcion: 'descripcion 3',
    //     fecha: new Date(),
    //     usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`,
    //   }
    // );
    // console.log(this.articulos);
    console.log(this.articulosObservable);
  }

  enviarInfoAlServicio() {
    this.ArticulosService.obtenerInfo(this.articulos);
  }

  //aqui yo estaba enviandole los datos del articulo que seleccionara
  IrDetalle(art: articulo) {
    this.ArticulosService.articulo(art);
    this.ruta.navigateByUrl('/articuloDetalle');
  }

  IrDetalleObservable(articuloO: Articulo) {
    this.ArticulosService.ArticuloNoticias(articuloO);
    this.ruta.navigateByUrl('/articuloDetalle');
  }
}
