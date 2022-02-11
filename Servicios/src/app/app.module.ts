import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//services
import { UsuariosService } from './services/usuarios.service';
import { ArticulosService } from './services/articulos.service';

//components
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PerfilComponent } from './components/perfil/perfil.component';

//rutas
import { APP_ROUTES } from './routes/routes';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    PerfilComponent,
    ArticuloDetalleComponent,
  ],
  imports: [BrowserModule, APP_ROUTES],
  providers: [UsuariosService, ArticulosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
