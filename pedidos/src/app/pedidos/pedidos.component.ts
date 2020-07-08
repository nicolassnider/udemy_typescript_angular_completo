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

  calcularTotal(posicion: number) {
    this.pedidosService.pedido.actualizarCantidades(posicion);
    this.pedidosService.guardarLocalStorage();
  }

  guardar()
  {
    this.pedidosService.guardarPedido();
  }

  eliminar(posicion:number){
    this.pedidosService.pedido.pedidoDetalle.splice(posicion,1)
    this.pedidosService.guardarLocalStorage();
  }

}
