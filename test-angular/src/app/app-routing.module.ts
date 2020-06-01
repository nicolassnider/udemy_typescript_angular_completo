import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitulosComponent } from './titulos/titulos.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';



const routes: Routes = [
  { path: '', component: TitulosComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'directiva', component: DirectivaComponent },
  { path: 'ejemplo', component: EjemploComponent },
  {
    path: 'usuarios', component: UsuariosComponent, children: [
      { path: 'agregar', component: AgregarUsuariosComponent },
      { path: 'editar', component: EditarUsuariosComponent }
    ]
  },
  { path:'articulo', component: ArticuloComponent},
  { path:'articuloDetalle', component: ArticuloDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
