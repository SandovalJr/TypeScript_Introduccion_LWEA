import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass'],
})
export class PerfilComponent implements OnInit {
  constructor(public usuarioInyectado: UsuariosService) {
    console.log(this.usuarioInyectado.usuario.nombre);
  }

  ngOnInit(): void {}

  cambiarNombre() {
    this.usuarioInyectado.usuario.nombre = 'susana';
  }
}
