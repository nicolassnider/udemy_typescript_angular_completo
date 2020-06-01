import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PerfilComponent } from './perfil/perfil.component';

import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
