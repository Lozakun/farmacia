import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  estados = ['Por Aprobar', 'Activo'];
  respUtilitarios = ['Sí', 'No'];

  constructor() { }

  ngOnInit() {
  }

}
