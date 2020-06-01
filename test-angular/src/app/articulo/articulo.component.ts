import { Component, OnInit } from '@angular/core';
import {Articulo} from '../models/Articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos:Array<Articulo>=new Array<Articulo>()
  constructor(private ruta:Router) { }

  ngOnInit(): void {
    this.articulos.push(
      {nombre:'tv 14',descripcion:'television 15 pulg',precio:2500,stock:100,precioMayorista:2000},
      {nombre:'licuadora',descripcion:'licuadora etc etc',precio:500,stock:200,precioMayorista:100},
      {nombre:'coso',descripcion:'otro asd con descripcion',precio:100,stock:50,precioMayorista:50}
    )
  }

  pasarParametro(articuloRecibido: Articulo){
    this.ruta.navigate(['articuloDetalle',{articulo:JSON.stringify(articuloRecibido)}]);
  }

}
