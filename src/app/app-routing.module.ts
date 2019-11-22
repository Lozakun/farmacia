import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternosComponent } from './externos/externos.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { MaquiladoresComponent } from './externos/maquiladores/maquiladores.component';
import { ProveedorFarmaciaComponent } from './proveedor-farmacia/proveedor-farmacia.component';

const routes: Routes = [
{path: 'externos', component: ExternosComponent, children: [
  {path: 'new', component: MaquiladoresComponent}
]},
{path: 'registro-medicamento', component: ProveedorFarmaciaComponent},
{path: 'backoffice', component: BackofficeComponent},
{path: '', redirectTo: 'externos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
