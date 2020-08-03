import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  validForm: Boolean = true;
  textoError: string = ''
  constructor(private formBuilder: FormBuilder, private afAuth: AngularFireAuth, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      password: ['', Validators.compose([
        Validators.required,
      ])],
    });
  }

  ingresar() {
    if (this.formularioLogin.valid) {
      this.validForm = true;
      this.spinner.show();
      this.afAuth.auth.signInWithEmailAndPassword(this.formularioLogin.value.email, this.formularioLogin.value.password)
        .then((usuario) => {
          this.spinner.hide();
          console.log('usuario: ', usuario);
        })
        .catch((error) => {
          this.validForm = false;
          this.textoError=error.message;
          this.spinner.hide();
        })
    }
    else {
      this.validForm = false;
      this.textoError = 'Verifique datos';
    }

  }

}
