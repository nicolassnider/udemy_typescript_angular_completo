import { Component, OnInit } from '@angular/core';
interface Cliente {
  nombre: string,
  apellido: string,
  edad: number
}
interface Producto {
  nombre: string,
  precio: number
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  guardarCliente() {

    let clientesAgregar: Array<Cliente> = new Array<Cliente>()
    clientesAgregar.push({ nombre: 'Carmen', apellido: 'Perez', edad: 15 },
      { nombre: 'Juan', apellido: 'Perez', edad: 13 },
      { nombre: 'Pedro', apellido: 'Rodrigue', edad: 16 })
    localStorage.setItem('clientes', JSON.stringify(clientesAgregar));

  }
  guardarProductos() {
    let productosAgregar: Array<Producto> = new Array<Producto>()
    productosAgregar.push({ nombre: 'Pate', precio: 15 },
      { nombre: 'Cafe', precio: 16 },
      { nombre: 'Harina', precio: 17 })
    localStorage.setItem('productos', JSON.stringify(productosAgregar));
  }

  eliminarClientes() {
    localStorage.removeItem("clientes");
  }
  eliminarProductos() {
    localStorage.removeItem("productos");
  }
  eliminarTodos() {
    localStorage.clear();
  }

  clientesLocales(): Cliente[] {
    let clientesLocalStorage: Cliente[] = JSON.parse(localStorage.getItem("clientes"))
    if (clientesLocalStorage == null) new Array<Cliente>()
    return clientesLocalStorage;
  }
  productosLocales(): Producto[] {
    let productosLocalStorage: Producto[] = JSON.parse(localStorage.getItem("productos"))
    if (productosLocalStorage == null) new Array<Producto>()
    return productosLocalStorage;
  }

}
