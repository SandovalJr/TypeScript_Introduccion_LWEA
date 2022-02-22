import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo, articulo } from '../models/articulo.model';
import { user } from '../models/user.models';
let Art: Articulo;

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  // articulo: articulo = new articulo();
  // articulo: Array<articulo> =
  datoss: any[] = [];
  ruta: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  leeruser(id: number): Observable<user> {
    // console.log(`${this.ruta}/users/${id}`);
    return this.http.get<user>(`${this.ruta}/users/${id}`);
  }

  //get observable
  leerNoticias(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  ArticuloNoticias(articuloRecibido: Articulo) {
    Art = articuloRecibido;
    // this.datoss.push(articuloRecibido)
    // console.log(this.datoss);
  }

  getinfo1articulo() {
    return Art;
    // console.log(Art);
    // return  this.datoss;
  }

  obtenerInfo(arrayArticulos: Array<articulo>) {
    // console.log(`informacion service:`);
    // console.log(arrayArticulos);
  }

  articulo(articulo: articulo) {
    // console.log('informacion recibida');
    // console.log(articulo);
  }
}
