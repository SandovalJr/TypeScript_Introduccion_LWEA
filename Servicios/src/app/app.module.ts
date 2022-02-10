import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//services
import { UsuariosService } from './services/usuarios.service';
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, EncabezadoComponent],
  imports: [BrowserModule],
  providers: [UsuariosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
