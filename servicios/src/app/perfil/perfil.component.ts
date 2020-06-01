import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(public UsuarioInyectado:UsuariosService) { }

  ngOnInit(): void {
  }

  cambiarNombre()
  {
    this.UsuarioInyectado.usuario.nombre ='María'
  }

}
