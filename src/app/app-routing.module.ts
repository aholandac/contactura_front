import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './login/login.component';
import { AuthAdminGuard, AuthGuard } from './service/auth.guard';
import { NotFoudComponent } from './sharerComponents/not-foud/not-foud.component';


const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'lista-contatos', component: ListaContatosComponent, canActivate: [AuthGuard]},
  {path:'lista-usuario', component: ListaUsuariosComponent, canActivate: [AuthGuard] },
  {path:'cadastro-contatos', component: FormContatosComponent, canActivate: [AuthGuard]},
  {path:'cadastro-usuarios', component: FormUsuariosComponent, canActivate: [AuthAdminGuard]},
  {path:'**', component: NotFoudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }