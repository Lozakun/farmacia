import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

import { Proveedor } from '../shared/proveedor.model';
import { ProveedorService } from '../proveedor.service';


@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.css']
})
export class ExternosComponent implements OnInit, OnDestroy {
  subscriptionNvoMaq: Subscription;
  subscriptionAgrMaq: Subscription;
  proveedor: Proveedor;
  altaProveedorForm: FormGroup;
  responsableSanitario = ['Aplica', 'No Aplica'];
  opcionesMaquiladores = ['Sí', 'No', 'No aplica'];
  id: number;
  agregarMaquiladorOut: boolean = false;

  constructor(private provService: ProveedorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    
    if(this.id) {
      console.log(this.id);
      this.proveedor = this.provService.getProveedor(this.id);
    } else {
      this.proveedor = new Proveedor('', '', '', '', '', 'No Aplica', 'No aplica', [], [], [], [], [], '', false);
      // this.prov.createProveedorTemporal(this.proveedor);
    }  
    this.iniciarForma();
    console.log(this.proveedor);

    this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    // this.subscriptionNvoMaq = this.provService.nuevoMaquilador
    // .subscribe((valor) => {
    //   this.agregarMaquiladorOut = valor;
    //   console.log(this.agregarMaquiladorOut);
    // });

    this.subscriptionAgrMaq = this.provService.agregarMaquilador
    .subscribe((maquilador) => {
      this.proveedor.maquiladores.push(maquilador);
      console.log(this.proveedor);
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
    this.onCancelAgregarMaquilador();
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
      isResponsableSanitario: new FormControl(this.proveedor.responsableSanitario, Validators.required),
      utilizasMaquiladores: new FormControl(this.proveedor.utilizaMaquiladores, Validators.required)
    });
  }

  onAgregarMaquilador() {
    this.provService.nuevoMaquilador.next(true);
  }

  onCancelAgregarMaquilador() {
    this.provService.nuevoMaquilador.next(false);
  }

  ngOnDestroy() {
    // this.subscriptionNvoMaq.unsubscribe();
    this.subscriptionAgrMaq.unsubscribe();
  }

}
