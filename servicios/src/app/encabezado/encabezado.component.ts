import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constructor(public UsuarioInyectado: UsuariosService) { }

  ngOnInit(){

  }

  cambiarNombre(){
    this.UsuarioInyectado.usuario.nombre='Ana';
  }

}
