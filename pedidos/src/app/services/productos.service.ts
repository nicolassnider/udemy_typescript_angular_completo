import { Injectable } from '@angular/core';
import { Productos } from '../models/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  agregarLocalStorage(producto: Productos) {
    let productosAntiguos: Productos[]=this.productosLocalStorage;
    console.log('productosAntiguos', productosAntiguos)
    producto.id=productosAntiguos.length+1;
    productosAntiguos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productosAntiguos));
  }

  get productosLocalStorage(): Productos[] {
    let productosLocalStorage: Productos[] = JSON.parse(localStorage.getItem("productos"));
    if (productosLocalStorage == null) return new Array<Productos>();
    return productosLocalStorage;
  }
}
