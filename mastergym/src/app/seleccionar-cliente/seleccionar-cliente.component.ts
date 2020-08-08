import { Component, OnInit, Input, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../models/cliente';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styleUrls: ['./seleccionar-cliente.component.scss']
})
export class SeleccionarClienteComponent implements OnInit {
  clientes: Cliente[] = new Array<Cliente>();
  @Input('nombre') nombre: string;
  @Output('seleccionoCliente') seleccionoCliente = new EventEmitter();
  @Output('canceloCliente') canceloCliente = new EventEmitter();
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection<any>('clientes').get().subscribe((resultados) => {
      this.clientes.length = 0;
      resultados.docs.forEach((item) => {
        let cliente: any = item.data();
        cliente.id = item.id;
        cliente.ref = item.ref;
        cliente.visible = true;
        this.clientes.push(cliente);
      })
    })

  }
  buscarClientes(nombre: string) {
    this.clientes.forEach((cliente) => {
      if ((nombre)&&((cliente.nombre.toLowerCase().includes(nombre.toLowerCase())))) {
        cliente.visible = true;
      }
      else {
        cliente.visible = false;
      }
      if ((!nombre) || (nombre.length == 0)) {
        cliente.visible = true;
      }
    })
  }

  seleccionarCliente(cliente: Cliente) {
    this.nombre = `${cliente.nombre} ${cliente.apellido} (${cliente.dni})`;
    this.clientes.forEach((cliente) => {
      cliente.visible = false;
    })
    this.seleccionoCliente.emit(cliente);
  }

  cancelarCliente() {
    this.nombre = undefined;
    this.canceloCliente.emit();
  }  

}
