import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  nombre: String = 'María';
  apellido: String = 'Perez';

  alumno: any = {
    nombre: "Carlos",
    apellido: "Dominguez",
    edad: 15,
  }

  imagen: String = 'https://pngimage.net/wp-content/uploads/2018/06/imagenes-random-png-2.png';
  inputNuevo: String = 'hola q ase';

  correo: String = '';
  password: String = '';
  constructor() { }

  ngOnInit(): void {
  }

  eventoClick() {
    alert(`click ingresando con ${this.correo},${this.password}`);
  }

  eventoDblClick() {
    alert(`doble click ingresando con ${this.correo},${this.password}`);
  }

  eventoNgModelChange() {
    console.log('change');
    alert(`evento modelCHange ${this.correo}`);
  }

  escribir(event) {
    console.log(event.target.value)
  }

  focus(event) {
    var color: String = event.target.value;

    switch (color) {
      case "red":
        event.srcElement.style.background = 'red';
        break;

      case "blue":
        event.srcElement.style.background = 'blue';
        break;

      default:
        break;
    }
  }

}
