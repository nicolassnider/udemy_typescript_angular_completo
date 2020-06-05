import { Injectable } from '@angular/core';
import { Articulo } from '../models/Articulo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  ruta:string = 'https://jsonplaceholder.typicode.com/'
  articulo: Articulo = new Articulo()
  constructor(private http: HttpClient) { }

  leerNoticias(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.ruta}posts`)
  }

  leerUsuario(userId:number): Observable<User>{
    return this.http.get<User>(`${this.ruta}users/${userId}`)
  }

  guardarArticulo(articulo:Articulo):Observable<Articulo>{
    return this.http.post<Articulo>(`${this.ruta}posts`, articulo)
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.ruta}users`)
  }

  eliminarArticulo(id:number) : Observable<any>{
    return this.http.delete<any>(`${this.ruta}posts/${id}`)
  }

  updateArticulo(articulo:Articulo):Observable<Articulo>{
    return this.http.put<Articulo>(`${this.ruta}posts/'${articulo.id}`, articulo)
  }

}
