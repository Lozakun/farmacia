import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaquiladoresComponent } from './externos/maquiladores/maquiladores.component';
import { ListadoMaquiladorasComponent } from './externos/listado-maquiladoras/listado-maquiladoras.component';
import { ProveedorService } from './proveedor.service';
import { FiltrosComponent } from './backoffice/filtros/filtros.component';
import { LoginComponent } from './login/login.component';
import { UsuarioService } from './shared/usuario.service';
import { RegisterComponent } from './register/register.component';

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
    MaquiladoresComponent,
    ListadoMaquiladorasComponent,
    FiltrosComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProveedorService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
