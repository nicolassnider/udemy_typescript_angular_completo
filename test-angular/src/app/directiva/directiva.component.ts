import { Component, OnInit } from '@angular/core';

interface Producto {
  nombre: String,
  stock: Number,
  fabricante: String,
  fechaVence: Date,
  esImportante: Boolean
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {
  cargando: Boolean = true;
  nombres: Array<String> = ['Juan', 'Pedro', 'María'];
  pestana: String = '';

  productos: Array<Producto> = [{
    nombre: 'Mate',
    stock: 10,
    fabricante: 'Marolio',
    fechaVence: new Date('01/12/2020'),
    esImportante:false
  },
  {
    nombre: 'Cafe',
    stock: 10,
    fabricante: 'Marolio',
    fechaVence: new Date('02/12/2020'),
    esImportante:true
  },
  {
    nombre: 'Harina',
    stock: 10,
    fabricante: 'Marolio',
    fechaVence: new Date('03/12/2020'),
    esImportante:false
  },
  {
    nombre: 'Palmitos',
    stock: 10,
    fabricante: 'Marolio',
    fechaVence: new Date('04/12/2020'),
    esImportante:false
  }];
  mostrarCuadrado: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 5000)
  }

  mostrarCargando() {
    this.cargando = !this.cargando;
    this.cambiarPestana('perfil');
  }

  cambiarPestana(pestana: String) {
    this.pestana = pestana;
  }

  alternarFondo() {
    this.mostrarCuadrado = !this.mostrarCuadrado;
    console.log('mostrarCuadrado: ', this.mostrarCuadrado)
  }

}
