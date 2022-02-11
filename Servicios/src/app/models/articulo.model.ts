export class articulo {
  titulo: string;
  descripcion: string;
  fecha: Date;
  usuario: string;

  constructor(
    titulo: string,
    descripcion: string,
    fecha: Date,
    usuario: string
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.usuario = usuario;
  }
}
