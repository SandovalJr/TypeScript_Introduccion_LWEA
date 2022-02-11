import { Component, OnInit } from '@angular/core';
import { articulo } from 'src/app/models/articulo.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  articulos: Array<articulo> = new Array<articulo>();
  constructor(public usuarioInyectado: UsuariosService) {}

  ngOnInit(): void {
    this.articulos.push({
      titulo: 'java 1',
      descripcion: 'descripcion 1',
      fecha: new Date('04/05/2020'),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`,
    },
    {
      titulo: 'java 2',
      descripcion: 'descripcion 2',
      fecha: new Date('08/12/2019'),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`,
    },
    {
      titulo: 'java 3',
      descripcion: 'descripcion 3',
      fecha: new Date(),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`,
    });
  }
}
