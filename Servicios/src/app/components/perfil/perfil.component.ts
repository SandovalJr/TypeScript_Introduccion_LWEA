import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass'],
})
export class PerfilComponent implements OnInit {
  constructor( private UsuariosService: UsuariosService) {
    // this.UsuariosService.usuario.nombre = 'juan'
  }

  ngOnInit(): void {}

  cambiarNombre() {
    // this.usuarioInyectado.usuario.nombre;
  }
}
