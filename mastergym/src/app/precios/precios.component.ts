import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss']
})
export class PreciosComponent implements OnInit {

  formularioPrecio: FormGroup;
  precios: any[] = Array<any>();
  constructor(
    private fb: FormBuilder,
    private db: AngularFirestore,
    private mensajes: MensajesService) { }

  ngOnInit(): void {
    this.formularioPrecio = this.fb.group(
      {
        nombre: ['', Validators.compose([
          Validators.required,
        ])],
        costo: ['', Validators.compose([
          Validators.required,
        ])],
        duracion: ['', Validators.compose([
          Validators.required,
        ])],
        tipoDuracion: ['', Validators.compose([
          Validators.required,
        ])],
      }
    )
    this.db.collection('precios').get().subscribe((resultado)=>{
      resultado.docs.forEach((dato)=>{
        let precio = dato.data();
        precio.id = dato.id;
        precio.ref = dato.ref;
        this.precios.push(precio)
      })
    })
  }

  agregar(){
    this.db.collection('precios').add(this.formularioPrecio.value)
    .then(()=>{
      this.mensajes.mensajeOk('Registrar', 'Precio agregado con éxito');
    })
    .catch(()=>{
      this.mensajes.mensajeError('Registrar', 'Ocurrió un error');
    })
  }

}
