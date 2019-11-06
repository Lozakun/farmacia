import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.css']
})
export class ExternosComponent implements OnInit {

  altaProveedor: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  guardarProveedor() {
    console.log('guardando proveedor...');
  }

}
