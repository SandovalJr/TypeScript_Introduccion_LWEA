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
  userID: number;
  id: number;
  title: string;
  body: string;

  constructor(userID: number, id: number, title: string, body: string) {
    this.userID = userID;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
