import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
///////////////////////////////////////
//IMPORTS COMPONENT pppp
//////////////////////////////////////

import { DirectivasComponent } from '../app/components/directivas/DirectivasComponent';
import { Ejemplo1Component } from '../app/components/ejemplo1/ejemplo1.component';
import { TitulosComponent } from '../app/components/titulos/titulos.component';
import { PipesComponent } from '../app/components/pipes/pipes.component';
import { Error404Component } from '../app/components/error404/error404.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';

//usuarios
import { AgregarUsuariosComponent } from '../app/components/usuarios/agregar-usuarios/agregar-usuarios.component';
import { UsuariosComponent } from '../app/components/usuarios/usuarios.component';
import { EditarUsuariosComponent } from '../app/components/usuarios/editar-usuarios/editar-usuarios.component';

//Articulos
import { ArticuloComponent } from '../app/components/articulo/articulo.component';
import { ArticuloDetallesComponent } from '../app/components/articulo-detalles/articulo-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: TitulosComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'ejemplo',
    component: Ejemplo1Component,
  },
  {
    path: 'directivas',
    component: DirectivasComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [
      {
        path: 'agregarUsuario',
        component: AgregarUsuariosComponent,
      },
      {
        path: 'editarUsuario',
        component: EditarUsuariosComponent,
      },
    ],
  },
  {
    path: 'articulos',
    component: ArticuloComponent,
  },
  // { path: 'articuloDetalle/:nombre/:price', component: ArticuloDetallesComponent },
  // { path: 'articuloDetalle/:articulo', component: ArticuloDetallesComponent },
  { path: 'articuloDetalle', component: ArticuloDetallesComponent },
  {
    path: '**',
    component: Error404Component,
  },
];

export const APP_ROUTESS = RouterModule.forRoot(routes);
