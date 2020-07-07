import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/Productos';
import { ProductosService } from '../services/productos.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Array<Productos> = new Array<Productos>();
  constructor(public productosService: ProductosService, public pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.productos = this.productosService.productosLocalStorage;
  }

  buscarProducto(nombreBuscar) {
    this.productos = this.productosService.productosLocalStorage.filter(producto => {
      return producto.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase());
    })
  }

  agregar(producto: Productos){
    this.pedidosService.pedido.agregarProducto(producto);
  }
}
