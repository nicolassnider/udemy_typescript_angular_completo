import { Injectable } from '@angular/core';
import { Pedido } from '../models/Pedido';
import { Productos } from '../models/Productos';
import { PedidoDetalle } from '../models/PedidoDetalle';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedido: Pedido = new Pedido();
  constructor() {
     this.pedido.agregarProducto
   }

  
}
