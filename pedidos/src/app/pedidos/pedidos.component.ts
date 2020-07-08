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
    this.pedidosService.pedido
  }

}
