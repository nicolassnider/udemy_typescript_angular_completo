import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/Articulo';
import { UsuariosService } from '../services/usuarios.service';
import { ArticulosService } from '../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(public UsuarioInyectado: UsuariosService, public ArticuloInyectado:ArticulosService, public Ruta:Router ) { }

  ngOnInit(): void {
    this.ArticuloInyectado.leerNoticias().subscribe((articulosDesdeApi)=>{
      this.articulos = articulosDesdeApi;
    });
    let articuloEnviar: Articulo=new Articulo();
    articuloEnviar.body='Esto es el artículo enviado';
    articuloEnviar.title='Título';
    articuloEnviar.userId=123123;
    this.ArticuloInyectado.guardarArticulo(articuloEnviar).subscribe((articuloCreado)=>{
      this.articulos.push(articuloCreado)
    })
  }

  irADetalle(articulo:Articulo){
    this.ArticuloInyectado.articulo=articulo;
    this.Ruta.navigateByUrl('/articulo-detalle')
  }

  eliminar(id:number){
    this.ArticuloInyectado.eliminarArticulo(id).subscribe((datos)=>{
      console.log(datos);
    })
  }

}
