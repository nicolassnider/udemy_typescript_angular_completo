import { DocumentReference } from '@angular/fire/firestore';
export class Inscripcion {
  fecha: Date;
  fechaFinal: Date;
  cliente: DocumentReference;
  precios: DocumentReference;
  subTotal: number;
  iva: number;
  total: number;

  constructor() {
    this.fecha = null;
    this.fechaFinal = null;
    this.cliente = this.cliente;
    this.precios = this.precios;
    this.subTotal = this.subTotal;
    this.iva = this.iva;
    this.total = this.total;
  }
}
