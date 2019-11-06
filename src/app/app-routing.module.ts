import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExternosComponent } from './externos/externos.component';
import { BackofficeComponent } from './backoffice/backoffice.component';

const routes: Routes = [
{path: 'externos', component: ExternosComponent},
{path: 'backoffice', component: BackofficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
