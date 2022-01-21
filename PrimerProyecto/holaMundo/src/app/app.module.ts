import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitulosComponent } from './components/titulos/titulos.component';

import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './components/directivas/DirectivasComponent';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ContinuaraPipe } from './continuara.pipe';

import { APP_ROUTESS } from '../routes/routes';
import { Error404Component } from './components/error404/error404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AgregarUsuariosComponent } from './components/usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './components/usuarios/editar-usuarios/editar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivasComponent,
    Ejemplo1Component,
    PipesComponent,
    ContinuaraPipe,
    Error404Component,
    NavbarComponent,
    UsuariosComponent,
    AgregarUsuariosComponent,
    EditarUsuariosComponent,
  ],
  imports: [APP_ROUTESS,BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
