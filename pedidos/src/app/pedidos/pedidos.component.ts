import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedido';
import { PedidoDetalle } from '../models/PedidoDetalle';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidosService: PedidosService) { }

  ngOnInit(): void {
    let pedido:Pedido = new Pedido();
    pedido.clienteId=1;
    pedido.nombreCliente='Juan';
    pedido.total=1500;
    pedido.pedidoDetalle.push(
      {
        id:1,
        productoId:1,
        nombreProducto:'caca1',
        cantidad:5,
        precio:200,
        total:5*200,

      },
      {
        id:2,
        productoId:2,
        nombreProducto:'otro prod',
        cantidad:5,
        precio:2,
        total:5*2,

      },
      {
        id:3,
        productoId:3,
        nombreProducto:'otro prod mas',
        cantidad:5,
        precio:10,
        total:10*5,

      },
    )

    console.log('pedido:',pedido)
  }

}
