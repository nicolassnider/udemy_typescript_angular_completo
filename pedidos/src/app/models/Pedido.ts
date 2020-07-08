import { PedidoDetalle } from './PedidoDetalle';
import { Productos } from './Productos';
import { of } from 'rxjs';

export class Pedido {
  id: number;
  nombreCliente: string;
  clienteId: number;
  total: number;
  pedidoDetalle: Array<PedidoDetalle>

  constructor() {
    this.id = this.id;
    this.clienteId = this.clienteId;
    this.nombreCliente = this.nombreCliente;
    this.total = this.total;
    this.pedidoDetalle = new Array<PedidoDetalle>();
  }

  agregarProducto(producto: Productos) {
    let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
    pedidoDetalle.cantidad = 1;
    pedidoDetalle.nombreProducto = producto.nombre;
    pedidoDetalle.precio = producto.precio;
    pedidoDetalle.productoId = producto.id;
    pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;
    let existe: number = this.pedidoDetalle.filter(x => x.productoId == producto.id).length;

    if (existe > 0) {
      let posicion: number = this.pedidoDetalle.findIndex(x => x.productoId == producto.id);
      this.pedidoDetalle[posicion].cantidad++;
      this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad * this.pedidoDetalle[posicion].precio;
    }
    else { this.pedidoDetalle.push(pedidoDetalle); }
    this.actualizarTotal();
    console.log(this.pedidoDetalle);

  }

  private actualizarTotal(){
    this.total=0;
    for (let producto of this.pedidoDetalle) {
      this.total=this.total+producto.total;
    }
  }
}
