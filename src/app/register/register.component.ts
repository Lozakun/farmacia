import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor() { }

  ngOnInit() {
    this.iniciarRegisterForm();
  }

  onRegister() {
    console.log(this.registerForm);
  }

  iniciarRegisterForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellidoPrimero: new FormControl('', Validators.required),
      apellidoSegundo: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', [Validators.required])
    });
  }

}
