import { Injectable } from '@angular/core';
import { articulo } from '../models/articulo.model';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  articulo: any;
  constructor(private ArticuloInyectDado: ArticulosService) {}
}
