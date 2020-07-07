import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  agregarLocalStorage(cliente: Cliente) {
    let clientesAntiguos: Cliente[]=this.clientesLocalStorage;
    console.log('clientesAntiguos', clientesAntiguos)
    cliente.id=clientesAntiguos.length+1;
    clientesAntiguos.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientesAntiguos));
  }

  get clientesLocalStorage(): Cliente[] {
    let clientesLocalStorage: Cliente[] = JSON.parse(localStorage.getItem("clientes"));
    if (clientesLocalStorage == null) return new Array<Cliente>();
    return clientesLocalStorage;
  }
}
