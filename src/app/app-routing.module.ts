import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternosComponent } from './externos/externos.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ProveedorFarmaciaComponent } from './proveedor-farmacia/proveedor-farmacia.component';
import { MaquiladoresComponent } from './externos/maquiladores/maquiladores.component';

const routes: Routes = [
{path: 'externos', children: [
  {path: 'new', component: ExternosComponent, children: [
    {path: 'maquila', component: MaquiladoresComponent}
  ]},
  {path: ':id', component: ExternosComponent, children: [
    {path: 'maquila', component: MaquiladoresComponent}, 
    {path: 'edit', component: MaquiladoresComponent},
  ]},
  {path: ':id', component: ExternosComponent},
]},
{path: 'registro-medicamento', component: ProveedorFarmaciaComponent},
{path: 'backoffice', component: BackofficeComponent},
{path: '', redirectTo: 'externos/new', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
