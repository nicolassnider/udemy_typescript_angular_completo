import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Productos } from '../models/Productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent implements OnInit {

  formularioAgregar: FormGroup
  producto:Productos=new Productos();
  constructor(private fb: FormBuilder, public productoService:ProductosService) { }

  ngOnInit(): void {
    this.formularioAgregar=this.fb.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      precio:['',Validators.required]
    })
  }

  agregar(){
    this.producto=this.formularioAgregar.value as Productos;
    this.productoService.agregarLocalStorage(this.producto);
    this.formularioAgregar.reset();
  }



}
