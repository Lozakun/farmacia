import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel, Form } from '@angular/forms';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../shared/proveedor.model';

@Component({
  selector: 'app-proveedor-farmacia',
  templateUrl: './proveedor-farmacia.component.html',
  styleUrls: ['./proveedor-farmacia.component.css']
})
export class ProveedorFarmaciaComponent implements OnInit {

  proveedor: Proveedor;
  registroMedicamentoForm: FormGroup;
  dispositivoForm: FormGroup;
  suplementoForm: FormGroup;
  cosmeticoForm: FormGroup;
  tiposProducto = ['Medicamento', 'Suplemento Alimenticio', 'Dispositivo Medico', 'Cosmético'];
  plantaProcesamiento = [];
  tipoProducto: string;
  diaActual = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

  constructor(private provService: ProveedorService) { }

  ngOnInit() {
    this.proveedor = this.provService.getProveedor(234243);
    this.plantaProcesamiento = this.proveedor.maquiladores;
    this.iniciarMedicamentoForma();
    this.iniciarSuplementoForma();
    this.iniciarDispositivoForm();
    this.iniciarCosmeticoForm();
  }

  registraMedicamento() {
    console.log('registrando producto!!...');
  }

  agregarSuplemento() {
    console.log('registrando producto!!...');
  }

  agregarDispositivo() {
    console.log('registrando producto!!...');
  }

  agregarCosmetico() {
    console.log('registrando producto!!...');
  }

  iniciarMedicamentoForma() {
    this.registroMedicamentoForm = new FormGroup({
      nombreProducto: new FormControl('', Validators.required),
      presentacion: new FormControl('', Validators.required),
      principioActivo: new FormControl('', Validators.required),
      vigenciaRegistro: new FormControl(this.diaActual.toDateString(), Validators.required),
      planta: new FormControl(this.plantaProcesamiento[0].nombre, Validators.required)
    });
  }

  iniciarSuplementoForma() {
    this.suplementoForm = new FormGroup({
      nombreSuplemento: new FormControl('', Validators.required),
      presentacion: new FormControl('', Validators.required),
      plantaSup: new FormControl(this.plantaProcesamiento[0].nombre, Validators.required)
    });
  }

  iniciarDispositivoForm() {
    this.dispositivoForm = new FormGroup({
      nombreDispositivo: new FormControl('', Validators.required),
      presentacion: new FormControl('', Validators.required),
      plantaDisp: new FormControl(this.plantaProcesamiento[0].nombre, Validators.required),
      vigenciaRegSanitario: new FormControl(this.diaActual.toDateString(), Validators.required)
    });
  }

  iniciarCosmeticoForm() {
    this.cosmeticoForm = new FormGroup({
      nombreCosmetico: new FormControl('', Validators.required),
      presentacion: new FormControl('', Validators.required),
      plantaCosm: new FormControl(this.proveedor.maquiladores[0].nombre, Validators.required)
    });
  }

}
