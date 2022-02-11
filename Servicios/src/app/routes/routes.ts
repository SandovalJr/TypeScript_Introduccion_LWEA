import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

//components
import { HomeComponent } from '../components/home/home.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { ArticuloDetalleComponent } from '../components/articulo-detalle/articulo-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'articuloDetalle',
    component: ArticuloDetalleComponent,
  },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
