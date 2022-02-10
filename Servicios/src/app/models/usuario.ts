export class Usuario {
  usuarioID: number;
  nombre: string;
  apellido: string;
  password: string;

  constructor(
    usuarioID: number,
    nombre: string,
    apellido: string,
    password: string
  ) {
    this.usuarioID = usuarioID;
    this.nombre = nombre;
    this.apellido = apellido;
    this.password = password;
  }
}
