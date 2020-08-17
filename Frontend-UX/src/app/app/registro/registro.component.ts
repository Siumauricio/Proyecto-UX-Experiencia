import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private API = 'http://localhost:5000/api/Admin/Registro';

  constructor(private http:HttpClient,private toastr: ToastrService,private router:Router) { }

  user = new FormGroup({
    correo: new FormControl(''),
    nombre: new FormControl(''),
    contrasena: new FormControl('')
  });
  ngOnInit() {
  }

  onSubmit() {
    const usuario: Usuario = <Usuario>{
      "Correo": this.user.get('correo').value,
      "Nombre": this.user.get('nombre').value,
      "Contrasena": this.user.get('contrasena').value
    };
    //console.warn(this.profileForm.value);
    return this.http.post(this.API,usuario).subscribe(
      res=>{},
      error => { this.toastr.warning('Error: Usuario ya existe', 'Usuario!')},
      ()=> {    this.toastr.success('Usuario Registrado Correctamente!', 'Bienvenido!');  this.router.navigateByUrl('/Login', { skipLocationChange: true });  });
    }
}
interface  Usuario{
Correo:string;
Nombre:string;
Contrasena:string;
}
