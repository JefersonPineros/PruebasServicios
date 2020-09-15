import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importar componentes
import { HomeComponent } from './Componentes/home/home.component';
import { RegistrarComponent } from './Componentes/registrar/registrar.component';
import { ActualizarComponent } from './Componentes/actualizar/actualizar.component';


const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'registrar',component: RegistrarComponent},
  {path:'actualizar',component: ActualizarComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true}),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
