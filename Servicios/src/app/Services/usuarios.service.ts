import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuario: Usuario = new Usuario(1, "elias", "sandoval", "123454");

  constructor() {
   
  }
  
}
