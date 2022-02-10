import { Injectable } from '@angular/core';

import { Usuario} from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuario: Usuario = new Usuario();

  constructor() {
    this.usuario.usuarioID = 1;
    this.usuario.nombre = 'elias'
    this.usuario.apellido = 'sandoval'
    this.usuario.password = '12345'
  }
}
