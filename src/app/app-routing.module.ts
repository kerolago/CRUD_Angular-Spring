import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form/form.component';

const routes: Routes = [
  { path: 'directivas',component: DirectivaComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'clientes/form', component: FormComponent},
  { path: 'clientes/form/:id', component: FormComponent},

  { path: '**',pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
