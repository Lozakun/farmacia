import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Maquilador } from '../../shared/maquilador.model';
import { Proveedor } from '../../shared/proveedor.model';
import { ProveedorService } from '../../proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-maquiladores',
  templateUrl: './maquiladores.component.html',
  styleUrls: ['./maquiladores.component.css']
})
export class MaquiladoresComponent implements OnInit, OnDestroy {
  proveedor: Proveedor;
  maquila: Maquilador;
  maquilaForm: FormGroup;
  responsableSanitarioMaquiladora: FormControl;
  opcionesResponsableSanitario = ['Sí', 'No'];
  idResponsableMaquilador = 'asdfgqwert12345z';
  idAvisoFuncionamiento = 'asdfgqwert12345x';
  agregarMaquiladorIn: boolean;
  subscNvoMaquilador: Subscription;
  subscMaqSeleccionado: Subscription;

  constructor(private provService: ProveedorService, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.maquila = this.provService.maquila;
    console.log(this.maquila);
    if(this.maquila == undefined) {
      this.maquila = new Maquilador('', '', '', '', '', null, 'No', null);
    }
    this.inicializarForma();

    this.subscNvoMaquilador = this.provService.nuevoMaquilador.
    subscribe((indicacion) => {
      this.agregarMaquiladorIn = indicacion;
    });

    this.subscMaqSeleccionado = this.provService.MaquiladorSeleccionado
    .subscribe((maquila) => {
      this.maquila = maquila;
      this.inicializarForma();
      console.log(this.maquila);
    })
  }

  agregarMaquila() {
    // tslint:disable-next-line:no-string-literal
    this.maquila = new Maquilador(this.maquilaForm.controls.nombreMaquila.value,
      this.maquilaForm.controls.telMaquila.value, this.maquilaForm.controls.correoMaquila.value,
      this.maquilaForm.controls.rfcMaquila.value, this.maquilaForm.controls.dirMaquila.value,
      this.maquilaForm.controls.responsableSanitarioMaquiladora.value, this.idResponsableMaquilador,
       this.idAvisoFuncionamiento);
    this.maquilaForm.reset({
      nombreMaquila: null,
      telMaquila: null,
      correoMaquila: null,
      rfcMaquila: null,
      dirMaquila: null,
      responsableSanitarioMaquiladora: 'No'
    });
    this.provService.agregarMaquilador.next(this.maquila);
    this.router.navigate(['../'], {relativeTo: this.route});
    // this.provService.nuevoMaquilador.next(false);
  }

  onCancelAgregarMaquila() {
    
    this.router.navigate(["../"], {relativeTo: this.route});
  }

  inicializarForma() {
    this.maquilaForm = new FormGroup({
      nombreMaquila: new FormControl(this.maquila.nombre, Validators.required),
      telMaquila: new FormControl(this.maquila.telefono, Validators.required),
      correoMaquila: new FormControl(this.maquila.correo, Validators.required),
      rfcMaquila: new FormControl(this.maquila.rfcMaquilador, Validators.required),
      dirMaquila: new FormControl(this.maquila.direccionMaquilador, Validators.required),
      responsableSanitarioMaquiladora: new FormControl(this.maquila.responsableMaquilador, Validators.required)
    });
  }

  ngOnDestroy() {
    this.subscMaqSeleccionado.unsubscribe();
    this.subscNvoMaquilador.unsubscribe();
    this.provService.setMaquilador(undefined);
  }

}
