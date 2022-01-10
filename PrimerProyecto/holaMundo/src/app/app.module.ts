import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitulosComponent } from './components/titulos/titulos.component';

import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from "./components/directivas/DirectivasComponent";

@NgModule({
  declarations: [AppComponent, TitulosComponent, DirectivasComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
