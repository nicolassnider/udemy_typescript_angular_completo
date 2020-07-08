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
    this.pedido = this.UltimoPedido;
  }

  guardarLocalStorage() {
    localStorage.setItem('ultimoPedido', JSON.stringify(this.pedido))
  }

  get UltimoPedido(): Pedido {
    let pedidoDeLocalStorage: Pedido = new Pedido(JSON.parse(localStorage.getItem('ultimoPedido')));
    if (pedidoDeLocalStorage == null) {
      return new Pedido;
    }
    return pedidoDeLocalStorage;
  }

  guardarPedido() {
    let listadoPedidos: Pedido[] = new Array<Pedido>();
    listadoPedidos = this.listadoPedidosLocalStorage;
    this.pedido.id = listadoPedidos.length + 1;
    listadoPedidos.push(this.pedido);
    localStorage.setItem('pedidos', JSON.stringify(listadoPedidos));
    localStorage.removeItem('ultimoPedido');
    this.pedido = new Pedido(null);
  }

  get listadoPedidosLocalStorage(): Pedido[] {
    let pedidos: Array<Pedido> = JSON.parse(localStorage.getItem('pedidos'));
    if (pedidos == null) {
      return new Array<Pedido>();

    }
    return pedidos.sort((a, b) => b.id - a.id);
  }

}
