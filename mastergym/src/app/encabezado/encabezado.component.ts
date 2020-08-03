import { Component, OnInit } from '@angular/core';
import { auth, User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  usuario:User

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario) => {
     this.usuario = usuario;
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
