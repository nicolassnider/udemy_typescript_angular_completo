import { Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core'
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplo-core';
  @ViewChild('inputNombre',{static:true}) inputNombre:ElementRef;
  @ViewChild(HijoComponent,{static:true}) hijo: HijoComponent;
  constructor(){
    console.log(this.inputNombre)
  }

  mostrar()
  {
    console.log(this.inputNombre);
    this.hijo.titulo='Lo modifiqué desde el padre';
  }

}
