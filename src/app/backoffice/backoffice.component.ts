import { Component, OnInit } from '@angular/core';

import { Proveedor } from '../shared/proveedor.model';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  proveedores: Proveedor[];
  
  constructor(private provServ: ProveedorService) { }

  ngOnInit() {
    this.proveedores = this.provServ.getProveedores();
  }

}
