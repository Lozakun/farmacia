import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private usuarioServ: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      nombreUsuario: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required) 
    });
  }

  iniciarSesion() {
    const rol = this.usuarioServ.validarUsuario(this.loginForm.get('nombreUsuario').value, this.loginForm.get('contrasena').value);
    if(rol != undefined){
      console.log('usuario autenticado con rol: ' + rol);
      // if(this.usuarioNuevo(this.loginForm.get('nombreUsuario').value, rol){
        this.router.navigate(['externos', 'new']);
      // }else {
      //   this.router.navigate(['externos', 'id']);
      // }
      
    }
  }

  // usuarioNuevo(usuario, rol): boolean{
  //   this.
  //   if(){
  //     return true;
  //   }else {
  //     return false;
  //   }
  // }

  registrarse() {
    console.log('registrandose...');
  }
}
