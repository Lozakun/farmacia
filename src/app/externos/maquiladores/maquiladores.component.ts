import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Maquilador } from '../../shared/maquilador.model';
import { Proveedor } from '../../shared/proveedor.model';
import { ProveedorService } from '../../proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maquiladores',
  templateUrl: './maquiladores.component.html',
  styleUrls: ['./maquiladores.component.css']
})
export class MaquiladoresComponent implements OnInit {
  @Input() proveedor: Proveedor;
  maquila: Maquilador;
  maquilaForm: FormGroup;
  nombreMaquila: FormControl;
  telMaquila: FormControl;
  correoMaquila: FormControl;
  rfcMaquila: FormControl;
  dirMaquila: FormControl;
  responsableSanitarioMaquiladora: FormControl;
  opcionesResponsableSanitario = ['Sí', 'No'];
  idResponsableMaquilador = 'asdfgqwert12345z';
  idAvisoFuncionamiento = 'asdfgqwert12345x';

  constructor(private provService: ProveedorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.maquila = new Maquilador('', '', '', '', '', null, 'No', null);

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
    // tslint:disable-next-line:no-string-literal
    this.maquila = {
      nombre: this.maquilaForm.controls.nombreMaquila.value,
      telefono: this.maquilaForm.controls.telMaquila.value,
      correo: this.maquilaForm.controls.correoMaquila.value,
      rfcMaquilador: this.maquilaForm.controls.rfcMaquila.value,
      direccionMaquilador: this.maquilaForm.controls.dirMaquila.value,
      responsableMaquilador: this.maquilaForm.controls.responsableSanitarioMaquiladora.value,
      idResponsableMaquilador: this.idResponsableMaquilador,
      idAvisoFuncionamientoMaquilador: this.idAvisoFuncionamiento
    };
    this.provService.nuevoMaquilador.next(this.maquila);
    this.maquilaForm.reset({
      nombreMaquila: null,
      telMaquila: null,
      correoMaquila: null,
      rfcMaquila: null,
      dirMaquila: null,
      responsableSanitarioMaquiladora: 'No'
    });
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
