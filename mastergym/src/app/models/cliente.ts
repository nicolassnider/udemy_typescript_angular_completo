import { DocumentReference } from'@angular/fire/firestore';

export class Cliente{
  id:string;
  nombre:string;
  apellido:string;
  correo:string;
  fechaNac:Date;
  imgUrl:string;
  telefono:string;
  dni:string;
  ref:DocumentReference;

  constructor()
  {

  }
}
