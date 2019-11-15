import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternosComponent } from './externos/externos.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { MaquiladoresComponent } from './externos/maquiladores/maquiladores.component';

const routes: Routes = [
{path: 'externos', component: ExternosComponent, children: [
  {path: 'new', component: MaquiladoresComponent}
]},
{path: 'backoffice', component: BackofficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
