import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  pedido: Pedido = new Pedido();
  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto() {
    this.pedido.pedidoDetalle.push({
      cantidad: 20,
      producto: 'Agua',
      precio: 15,
      total: 300,
    });
    Swal.fire(
      'Producto agregado',
      'Producto agregado con éxito!',
      'success'
    )
  }

  elHijoEliminoAlgo(evento) {
    this.pedido.pedidoDetalle.splice(evento.id, 1);
    Swal.fire('Producto eliminado','producto eliminado con éxito','warning')
  }

}
