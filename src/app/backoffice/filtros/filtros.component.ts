import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ProveedorService } from 'src/app/proveedor.service';
import { Proveedor } from 'src/app/shared/proveedor.model';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  filtrosForm: FormGroup;
  nombre: FormControl;
  idProveedor: FormControl;
  rfcProveedor: FormControl;
  estado: FormControl;
  responsableSanitario: FormControl;
  estados = ['Por Aprobar', 'Activo'];
  respSanitario = ['Aplica', 'No Aplica'];
  proveedoresEncontrados: Proveedor[];

  constructor(private srvProveedor: ProveedorService) { }

  ngOnInit() {
    this.iniciaFiltrosForm();
  }

  buscarProveedores() {
    this.srvProveedor.searchProveedor(this.filtrosForm.value);
    console.log(this.filtrosForm.value);
    console.log(this.proveedoresEncontrados);
  }

  iniciaFiltrosForm() {
    this.filtrosForm = new FormGroup({
      nombre: new FormControl(''),
      idProveedor: new FormControl(''),
      rfcProveedor: new FormControl(''),
      estado: new FormControl(this.estados[0]),
      responsableSanitario: new FormControl(this.respSanitario[0])
    });
  }


}
