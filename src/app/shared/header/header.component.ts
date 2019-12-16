import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;
  components = [];
  constructor(private userServ: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  onCerrarSesion() {
    this.userServ.onStatusChange.next(false);
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  onFarmacia() {
    this.navbarCollapsed = !this.navbarCollapsed;
    console.log(this.userServ.loggeado);
    if(this.userServ.loggeado){
      this.router.navigate(['/backoffice']);
    }else {
      this.router.navigate(['/']);
    }
  }
}
