import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {

  clientes: Cliente[] = new Array<Cliente>();
  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection<any>('clientes').get().subscribe((resultados)=>{
      this.clientes.length=0;
      resultados.docs.forEach((item)=>{
        let cliente: any = item.data();
        cliente.id = item.id;
        cliente.ref = item.ref;
        this.clientes.push(cliente);
      })
    })

  }

}
