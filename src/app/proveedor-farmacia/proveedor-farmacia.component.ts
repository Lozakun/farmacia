import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel, Form } from '@angular/forms';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../shared/proveedor.model';
import { Medicamento } from '../shared/medicamento.model';
import { Suplemento } from '../shared/suplemento.model';
import { Dispositivo } from '../shared/dispositivo.model';
import { Cosmetico } from '../shared/cosmetico.model';

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
  medicamento: Medicamento;
  suplemento: Suplemento;
  dispositivo: Dispositivo;
  cosmetico: Cosmetico;
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
    this.medicamento = new Medicamento(this.registroMedicamentoForm.get('nombreProducto').value, this.registroMedicamentoForm.get('presentacion').value,
    this.registroMedicamentoForm.get('principioActivo').value, this.registroMedicamentoForm.get('vigenciaRegistro').value,
    this.registroMedicamentoForm.get('planta').value, '1234', '4321', '9977', '2329');
    this.proveedor.medicamentos.push(this.medicamento);
    console.log(this.proveedor);
  }

  agregarSuplemento() {
    this.suplemento = new Suplemento(this.suplementoForm.get('nombreSuplemento').value, this.suplementoForm.get('presentacion').value,
    this.suplementoForm.get('plantaSup').value, '1234');
    this.proveedor.suplementos.push(this.suplemento);
    console.log(this.proveedor);
  }

  agregarDispositivo() {
    this.dispositivo = new Dispositivo(this.dispositivoForm.get('nombreDispositivo').value, this.dispositivoForm.get('presentacion').value,
    this.dispositivoForm.get('plantaDisp').value, '1234', this.dispositivoForm.get('vigenciaRegSanitario').value,
    '4312', '24324');
    this.proveedor.dispositivos.push(this.dispositivo);
    console.log(this.proveedor);
  }

  agregarCosmetico() {
    this.cosmetico = new Cosmetico(this.cosmeticoForm.get('nombreCosmetico').value, this.cosmeticoForm.get('presentacion').value,
    this.cosmeticoForm.get('plantaCosm').value, '12345');
    this.proveedor.cosmeticos.push(this.cosmetico);
    console.log(this.proveedor);
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
