import { PedidoDetalle } from './pedidoDetalle';

export class Pedido {
  cliente: string;
  direccion: string;
  pedidoDetalle: PedidoDetalle[];

  constructor() {
    this.cliente = this.cliente;
    this.direccion = this.direccion;
    this.pedidoDetalle = new Array<PedidoDetalle>();
  }
}
