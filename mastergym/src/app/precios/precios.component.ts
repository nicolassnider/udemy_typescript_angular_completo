import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from '../services/mensajes.service';
import { Precio } from '../models/precio';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss']
})
export class PreciosComponent implements OnInit {

  id:string='';
  esEditar:boolean=false;
  formularioPrecio: FormGroup;
  precios: Precio[] = Array<Precio>();
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

    this.mostrarPrecios();
  }

  mostrarPrecios(){
    this.db.collection('precios').get().subscribe((resultado)=>{
      this.precios.length=0;
      resultado.docs.forEach((dato)=>{
        let precio = dato.data() as Precio;
        precio.id = dato.id;
        precio.ref = dato.ref;
        this.precios.push(precio)
      })
    })
  }

  agregar(){
    this.db.collection('precios').add(this.formularioPrecio.value)
    .then(()=>{
      this.mostrarPrecios();
      this.mensajes.mensajeOk('Registrar', 'Precio agregado con éxito');
    })
    .catch(()=>{
      this.mensajes.mensajeError('Registrar', 'Ocurrió un error');
    })
  }

  editarPrecio(precio: Precio){
    this.formularioPrecio.setValue({
      nombre:precio.nombre,
      costo:precio.costo,
      duracion:precio.duracion,
      tipoDuracion:precio.tipoDuracion,
    })
    this.id=precio.id;
    this.esEditar=true;
  }

  editar(){
    this.db.doc('precios/'+ this.id).update(this.formularioPrecio.value)
    .then(()=>{
      this.esEditar=false;
      this.mostrarPrecios();
      this.mensajes.mensajeAdvertencia('Edición','Editado correctamente');
    })
    .catch(()=>{
      this.mensajes.mensajeError('Edición', 'ocurrió un error');
    })
  }

}
