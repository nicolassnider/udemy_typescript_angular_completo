import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/Articulo';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {
  articulo:Articulo;
  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.articulo=JSON.parse(this.ruta.snapshot.params.articulo);
    console.log(this.articulo);
  }

}
