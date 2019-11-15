import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.css']
})
export class ExternosComponent implements OnInit {

  altaProveedorForm: FormGroup;
  nombreProveedor: FormControl;
  telProveedor: FormControl;
  mailProveedor: FormControl;
  rfcProveedor: FormControl;
  dirProveedor: FormControl;
  idProveedor: FormControl;
  isResponsableSanitario: FormControl;
  utilizasMaquiladores: FormControl;
  responsableSanitario = ['Aplica', 'No aplica'];
  opcionesMaquiladores = ['Sí', 'No', 'No aplica'];

  constructor() { }

  ngOnInit() {
    this.altaProveedorForm = new FormGroup({
      nombreProveedor: new FormControl(),
      telProveedor: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      mailProveedor: new FormControl(null, [Validators.required, Validators.email]),
      rfcProveedor: new FormControl(null, [Validators.required, Validators.maxLength(14)]),
      dirProveedor: new FormControl(null, Validators.required),
      idProveedor: new FormControl(null, Validators.maxLength(10)),
      isResponsableSanitario: new FormControl('Aplica', Validators.required),
      utilizasMaquiladores: new FormControl(this.opcionesMaquiladores[1], Validators.required)
    });
    console.log(this.altaProveedorForm);
  }

  guardarProveedor() {
    console.log('guardando proveedor...');
  }

  conocerValor() {
    console.log(this.utilizasMaquiladores.value);
  }

}
