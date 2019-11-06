import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExternosComponent } from './externos/externos.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ProveedorFarmaciaComponent } from './proveedor-farmacia/proveedor-farmacia.component';
import { RegistroProductosComponent } from './registro-productos/registro-productos.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { EstadoSolicitudesComponent } from './estado-solicitudes/estado-solicitudes.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExternosComponent,
    BackofficeComponent,
    ProveedorFarmaciaComponent,
    RegistroProductosComponent,
    ListadoProductosComponent,
    EstadoSolicitudesComponent,
    ReactiveFormsModule
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
