import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

//components
import { HomeComponent } from '../components/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
