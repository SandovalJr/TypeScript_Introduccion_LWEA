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
import {NavbarComponent} from '../app/components/navbar/navbar.component'

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
    path: '**',
    component: Error404Component,
  },
];

export const APP_ROUTESS = RouterModule.forRoot(routes);
