import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {
  formularioCliente: FormGroup;
  porcentajeSubido: number = 0;
  esEditable: boolean = false;
  id: string;
  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private activatedRoute: ActivatedRoute) { }
  imgUrl: string = '';

  ngOnInit(): void {
    this.formularioCliente = this.fb.group(
      {
        nombre: ['', Validators.compose([
          Validators.required,
        ])],
        apellido: ['', Validators.compose([
          Validators.required,
        ])],
        email: ['', Validators.compose([
          Validators.required,
          Validators.email,
        ])],
        dni: ['', Validators.compose([
          Validators.required,
        ])],
        fechaNac: ['', Validators.compose([
          Validators.required,
        ])],
        telefono: ['', Validators.compose([
          Validators.required,
        ])],
        imgUrl: ['', Validators.compose([
          Validators.required,
        ])],
      }
    );
    this.id = this.activatedRoute.snapshot.params.clienteId;
    if (this.id) {
      this.esEditable = true;
      this.db.doc<any>('clientes' + '/' + this.id).valueChanges().subscribe((cliente) => {

        this.formularioCliente.setValue({
          nombre: cliente.nombre,
          apellido: cliente.apellido,
          email: cliente.email,
          dni: cliente.dni,
          fechaNac: cliente.fechaNac,
          telefono: cliente.telefono,
          imgUrl: '',

        })
        this.imgUrl = cliente.imgUrl;
      });
    }
  }

  agregar() {
    this.formularioCliente.value.imgUrl = this.imgUrl
    this.formularioCliente.value.fechaNac = new Date(this.formularioCliente.value.fechaNac);
    this.db.collection('clientes').add(this.formularioCliente.value).then((termino) => {
      console.log('Registro Creado');//TODO: liberar boton
    })
  }

  editar() {
    this.formularioCliente.value.imgUrl = this.imgUrl;
    this.formularioCliente.value.fechaNac = new Date(this.formularioCliente.value.fechaNac);
    this.formularioCliente.value;
    this.db.doc('cliente/' + this.id).update(this.formularioCliente.value)
      .then((resultado)=>{
        console.log(resultado);
      })
      .catch(()=>{
        console.log('error');
      })
  }

  subirImgUrl(evento) {

    if (evento.target.files.length > 0) {
      let file = evento.target.files[0];

      let ext = file.name.toString().substring(file.name.toString().lastIndexOf('.'));
      let path = `/clientes/${Date.now()}${ext}`;
      const ref = this.storage.ref(path);
      const tarea = ref.put(file);
      tarea.then((objeto) => {
        ref.getDownloadURL().subscribe((url) => {
          this.imgUrl = url;
        })
      })
      tarea.percentageChanges().subscribe((porcentaje) => {
        this.porcentajeSubido = porcentaje;
      })

    }
  }

}
