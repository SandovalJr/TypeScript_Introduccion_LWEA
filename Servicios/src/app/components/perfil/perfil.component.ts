import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass'],
})
export class PerfilComponent implements OnInit {
  constructor(usuarioInyectado: UsuariosService) {}

  ngOnInit(): void {}

  cambiarNombre() {
    // this.usuarioInyectado.usuario.nombre;
  }
}
