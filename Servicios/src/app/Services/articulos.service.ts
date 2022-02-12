import { Injectable } from '@angular/core';
import { articulo } from '../models/articulo.model';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  // articulo: articulo = new articulo();
  // articulo: Array<articulo> =
  constructor() {}

  obtenerInfo(arrayArticulos: Array<articulo>) {
    console.log(`informacion service:`);
    console.log(arrayArticulos);
  }

}
