import { Component, OnInit, Input } from '@angular/core';
import { Maquilador } from '../../shared/maquilador.model';

@Component({
  selector: 'app-listado-maquiladoras',
  templateUrl: './listado-maquiladoras.component.html',
  styleUrls: ['./listado-maquiladoras.component.css']
})
export class ListadoMaquiladorasComponent implements OnInit {

  @Input() maquila: Maquilador;
  constructor() { }

  ngOnInit() {
  }

}
