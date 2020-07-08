import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {
  listadoPedidos:Pedido[]=new Array<Pedido>();

  constructor(public pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.listadoPedidos=this.pedidosService.listadoPedidosLocalStorage;
  }

}
