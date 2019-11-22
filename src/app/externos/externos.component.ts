import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { Proveedor } from '../shared/proveedor.model';
import { Maquilador } from '../shared/maquilador.model';
import { ProveedorService } from '../proveedor.service';

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
  responsableSanitario = ['Aplica', 'No Aplica'];
  opcionesMaquiladores = ['Sí', 'No', 'No aplica'];
  nuevoMaquilador = new Subject<Maquilador>();

  constructor(private provService: ProveedorService) { }

  ngOnInit() {
    this.proveedor = new Proveedor('', '', '', '', '', 'No Aplica', 'No aplica', [], [], [], [], [], '', false);
    // this.prov.createProveedorTemporal(this.proveedor);
    this.iniciarForma();

    this.provService.nuevoMaquilador.subscribe((maquilador) => {
      this.proveedor.maquiladores.push(maquilador);
    });
  }

  guardarProveedor() {
    console.log(this.altaProveedorForm.controls.nombreProveedor.value);
    this.proveedor.nombre = this.altaProveedorForm.controls.nombreProveedor.value;
    this.proveedor.telefono = this.altaProveedorForm.controls.telProveedor.value;
    this.proveedor.correo = this.altaProveedorForm.controls.mailProveedor.value;
    this.proveedor.rfcProveedor = this.altaProveedorForm.controls.rfcProveedor.value;
    this.proveedor.direccionProveedor = this.altaProveedorForm.controls.dirProveedor.value;
    this.proveedor.responsableSanitario = this.altaProveedorForm.controls.isResponsableSanitario.value;
    this.proveedor.utilizaMaquiladores = this.altaProveedorForm.controls.utilizasMaquiladores.value;
    // this.proveedor = this.altaProveedorForm.value();
    this.provService.addProveedor(this.proveedor);
    console.log(this.provService.getProveedores());
  }

  iniciarForma() {
    this.altaProveedorForm = new FormGroup({
      nombreProveedor: new FormControl(this.proveedor.nombre, Validators.required),
      telProveedor: new FormControl(this.proveedor.telefono, [Validators.required, Validators.maxLength(10)]),
      mailProveedor: new FormControl(this.proveedor.correo, [Validators.required, Validators.email]),
      rfcProveedor: new FormControl(this.proveedor.rfcProveedor, [Validators.required, Validators.maxLength(14)]),
      dirProveedor: new FormControl(this.proveedor.direccionProveedor, Validators.required),
      idProveedor: new FormControl({value: this.proveedor.idProveedor, disabled: 'true'}, [Validators.maxLength(10)]),
      isResponsableSanitario: new FormControl(this.responsableSanitario[1], Validators.required),
      utilizasMaquiladores: new FormControl(this.opcionesMaquiladores[2], Validators.required)
    });
  }

}
