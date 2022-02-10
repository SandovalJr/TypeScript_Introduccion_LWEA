import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//services
import { UsuariosService } from './services/usuarios.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [UsuariosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
