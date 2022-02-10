import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.sass'],
})
export class EncabezadoComponent implements OnInit {
  constructor( private usuarioInyectado: UsuariosService) {}

  ngOnInit(): void {
  }
}
