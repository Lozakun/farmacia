import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { Proveedor } from './proveedor.model';
import { Maquilador } from './maquilador.model';
import { ProveedorService } from './proveedor.service';

@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.css']
})
export class ExternosComponent implements OnInit {

  proveedor: Proveedor;
  altaProveedorForm: FormGroup;
  nombreProveedor: FormControl;
  telProveedor: FormControl;
  mailProveedor: FormControl;
  rfcProveedor: FormControl;
  dirProveedor: FormControl;
  idProveedor: FormControl;
  isResponsableSanitario: FormControl;
  utilizasMaquiladores: FormControl;
  responsableSanitario = ['No Aplica', 'Aplica'];
  opcionesMaquiladores = ['Sí', 'No', 'No aplica'];
  nuevoMaquilador = new Subject<Maquilador>();

  constructor(private provService: ProveedorService) { }

  ngOnInit() {
    this.proveedor = new Proveedor('', '', '', '', '', false, [], '' );
    console.log(this.proveedor);
    // this.prov.createProveedorTemporal(this.proveedor);
    this.iniciarForma();

    this.provService.nuevoMaquilador.subscribe((maquilador) => {
      this.proveedor.maquiladores.push(maquilador);
    });
  }

  guardarProveedor() {
    console.log('guardando proveedor...');
  }

  iniciarForma() {
    this.altaProveedorForm = new FormGroup({
      nombreProveedor: new FormControl(this.proveedor.nombre, Validators.required),
      telProveedor: new FormControl(this.proveedor.telefono, [Validators.required, Validators.maxLength(10)]),
      mailProveedor: new FormControl(this.proveedor.correo, [Validators.required, Validators.email]),
      rfcProveedor: new FormControl(this.proveedor.rfcProveedor, [Validators.required, Validators.maxLength(14)]),
      dirProveedor: new FormControl(this.proveedor.direccionProveedor, Validators.required),
      idProveedor: new FormControl({value: this.proveedor.idProveedor, disabled: 'true'}, [Validators.maxLength(10)]),
      isResponsableSanitario: new FormControl('No aplica', Validators.required),
      utilizasMaquiladores: new FormControl(this.opcionesMaquiladores[1], Validators.required)
    });
  }

}
