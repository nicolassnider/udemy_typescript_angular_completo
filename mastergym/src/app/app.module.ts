import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    ListadoClientesComponent,
    AgregarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    NgxSpinnerModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [
    AngularFireAuth,
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
