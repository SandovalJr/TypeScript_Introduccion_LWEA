import { RouterModule, Routes } from "@angular/router";
import { Component } from "@angular/core";
///////////////////////////////////////
//IMPORTS COMPONENT pppp
//////////////////////////////////////

import {DirectivasComponent} from '../app/components/directivas/DirectivasComponent'
import {Ejemplo1Component} from '../app/components/ejemplo1/ejemplo1.component'
import {TitulosComponent} from '../app/components/titulos/titulos.component'
import {PipesComponent} from '../app/components/pipes/pipes.component'

const routes: Routes = [{
  path: "", component:TitulosComponent
},
{
  path: "pipes", component: PipesComponent
}
,
{
  path: "ejemplo1", component: Ejemplo1Component
}
,
{
  path: "directivasss", component: DirectivasComponent
}
  
]

export const APP_ROUTESS = RouterModule.forRoot(routes);
