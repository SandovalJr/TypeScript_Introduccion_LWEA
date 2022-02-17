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

export class Articulo {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
