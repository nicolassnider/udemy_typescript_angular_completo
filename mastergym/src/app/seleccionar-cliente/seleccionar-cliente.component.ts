import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styleUrls: ['./seleccionar-cliente.component.scss']
})
export class SeleccionarClienteComponent implements OnInit {
  clientes: Cliente[] = new Array<Cliente>();
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
        this.clientes.push(cliente);
      })
    })

  }

}
