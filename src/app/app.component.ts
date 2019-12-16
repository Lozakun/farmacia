import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './shared/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  login: boolean;
  title = 'Farmacia';

  constructor(private userServ: UsuarioService) {}

  ngOnInit() {
    this.login = this.userServ.loggeado;

    console.log(this.login);

    this.userServ.onStatusChange
    .subscribe((status) => {
      this.login = status;
      console.log(this.login);
    });
  }

}