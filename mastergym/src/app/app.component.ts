import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mastergym';
  usuario: User;
  cargando: boolean = true;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario) => {
      this.cargando = false;
      this.usuario = usuario;
    })
  }

}
