import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService, Usuario_Reg } from '../auth-service/auth-service.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private API = 'http://localhost:5000/api/Admin/Registro';

  constructor(private toastr: ToastrService,private router:Router,private authService:AuthService) { }

  user = new FormGroup({
    correo: new FormControl(''),
    nombre: new FormControl(''),
    contrasena: new FormControl('')
  });
  ngOnInit() {
  }

  onSubmit(form) {
    var usuario: Usuario_Reg = <Usuario_Reg>{
      Correo: form.correo,
      Contrasena: form.contrasena,
      Nombre: form.nombre,
    };
    console.log(usuario)
    this.authService.registrarUser(usuario);


  }
  // onSubmit() {
  //   const usuario: Usuario = <Usuario>{
  //     "Correo": this.user.get('correo').value,
  //     "Nombre": this.user.get('nombre').value,
  //     "Contrasena": this.user.get('contrasena').value
  //   };
  //   //console.warn(this.profileForm.value);
  //   return this.http.post(this.API,usuario).subscribe(
  //     res=>{},
  //     error => { this.toastr.warning('Error: Usuario ya existe', 'Usuario!')},
  //     ()=> {    this.toastr.success('Usuario Registrado Correctamente!', 'Bienvenido!');  this.router.navigateByUrl('/Login', { skipLocationChange: true });  });
  //   }
}

