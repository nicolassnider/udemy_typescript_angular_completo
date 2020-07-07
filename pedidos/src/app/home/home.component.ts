import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../models/Cliente';
import { Router } from '@angular/router';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes: Array<Cliente> = new Array<Cliente>();
  constructor(public clientesService: ClientesService, public pedidosService: PedidosService, public route:Router) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.clientesLocalStorage;
  }

  buscarCliente(event) {
    console.log('event: ', event);
    let searchString: string = event.target.value;
    if (searchString.length >= 3) {
      this.clientes = this.clientesService.clientesLocalStorage.filter(
        x => {
          return x.nombre.toLocaleLowerCase().includes(searchString);
        }
      )
    } else {
      this.clientes = this.clientesService.clientesLocalStorage;
    }
  }

  irAProductos(cliente:Cliente){
    this.pedidosService.pedido.clienteId=cliente.id;
    this.pedidosService.pedido.nombreCliente=`${cliente.nombre} ${cliente.apellido}` ;

    this.route.navigateByUrl("/productos")
  }

}
