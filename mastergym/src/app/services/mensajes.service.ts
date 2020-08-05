import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  mensajeError(title:string,descr:string){
    Swal.fire(title,descr,'error');
  };
  mensajeOk(title:string,descr:string){
    Swal.fire(title,descr,'success');
  };
  mensajeAdvertencia(title:string,descr:string){
    Swal.fire(title,descr,'warning');
  };
}
