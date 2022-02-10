import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

//components
import { HomeComponent } from '../components/home/home.component';
import { PerfilComponent } from '../components/perfil/perfil.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
