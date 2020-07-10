import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoComponent } from '../pedido/pedido.component';
import { PedidoDetalle } from '../models/pedidoDetalle';


@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.scss']
})
export class PedidoDetalleComponent implements OnInit {
  @Input() pedidoDetalle: PedidoDetalle[] = new Array<PedidoDetalle>();
  @Output() seEliminoUnProducto = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  eliminarProducto(posicion: number) {
    this.seEliminoUnProducto.emit({
      id: posicion
    })
  }

}
