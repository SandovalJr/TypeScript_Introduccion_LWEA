import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo, articulo } from '../models/articulo.model';

let Art: Articulo;

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  // articulo: articulo = new articulo();
  // articulo: Array<articulo> =

  constructor(private http: HttpClient) {}

  //get observable
  leerNoticias(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  ArticuloNoticias(articuloRecibido: Articulo) {
    Art = articuloRecibido;
    console.log(Art);
    //sigue sin retornarme la info
    return Art;
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
