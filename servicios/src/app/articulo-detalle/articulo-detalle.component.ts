import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { Router } from '@angular/router';
import { Articulo } from '../models/Articulo';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../models/User';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {

  articulo: Articulo = new Articulo();
  user:User= new User()
  constructor(public ArticuloInyectado: ArticulosService) {
    this.articulo = this.ArticuloInyectado.articulo;
  }

  ngOnInit(): void {
    this.ArticuloInyectado.leerUsuario(this.articulo.userId).subscribe((usuarioDesdeAPI=>{
      this.user=usuarioDesdeAPI;
    }))
  }

}
