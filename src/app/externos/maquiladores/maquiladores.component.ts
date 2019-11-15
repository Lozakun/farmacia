import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-maquiladores',
  templateUrl: './maquiladores.component.html',
  styleUrls: ['./maquiladores.component.css']
})
export class MaquiladoresComponent implements OnInit {

  maquilaForm: FormGroup;
  nombreMaquila: FormControl;
  telMaquila: FormControl;
  correoMaquila: FormControl;
  rfcMaquila: FormControl;
  dirMaquila: FormControl;
  responsableSanitarioMaquiladora: FormControl;
  opcionesResponsableSanitario = ['Sí', 'No'];

  constructor() { }

  ngOnInit() {
    this.maquilaForm = new FormGroup({
      nombreMaquila: new FormControl(null, Validators.required),
      telMaquila: new FormControl(null, Validators.required),
      correoMaquila: new FormControl(null, Validators.required),
      rfcMaquila: new FormControl(null, Validators.required),
      dirMaquila: new FormControl(null, Validators.required),
      responsableSanitarioMaquiladora: new FormControl('No', Validators.required)
    });
  }

  agregarMaquila() {
    console.log('agregar registro de maquila!');
  }

}
