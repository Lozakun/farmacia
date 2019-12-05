import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Maquilador } from '../../shared/maquilador.model';
import { ProveedorService } from 'src/app/proveedor.service';

@Component({
  selector: 'app-listado-maquiladoras',
  templateUrl: './listado-maquiladoras.component.html',
  styleUrls: ['./listado-maquiladoras.component.css']
})
export class ListadoMaquiladorasComponent implements OnInit {

  @Input() maquila: Maquilador;
  @Input() i: number;
  
  constructor(private provService: ProveedorService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  mostrarMaquila(i) {
    console.log(this.route.snapshot.url[1]);
    this.provService.setMaquilador(this.maquila);
    this.provService.MaquiladorSeleccionado.next(this.maquila);
    if (this.route.snapshot.url[1] === undefined) {
      this.router.navigate(['maquila'], {relativeTo: this.route});
    } else if(this.route.snapshot.url[1].path != 'maquila'){
      this.router.navigate(['maquila'], {relativeTo: this.route});
    }
  }

}
