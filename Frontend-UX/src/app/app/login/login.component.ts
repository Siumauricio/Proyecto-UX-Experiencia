import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lstUsuarios: Usuario[];
  private API = 'http://localhost:5000/api/Admin/Login';

  constructor(private http:HttpClient,private toastr: ToastrService,private router:Router) { }

  user = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl('')
  });
  ngOnInit() {
  }

  onSubmit() {
    var usuario: Usuario = <Usuario>{
      "Correo": this.user.get('correo').value,
      "Contrasena": this.user.get('contrasena').value,
      "rol":0
    };
    //console.warn(this.profileForm.value);
    return this.http.post<Usuario[]>(this.API,usuario).subscribe(
      res=>{this.lstUsuarios=res;},
      error => { this.toastr.warning('Error: Usuario Invalido', 'Usuario!')},
      ()=> {    
        if(this.lstUsuarios[0].rol ==1 ){
          this.toastr.success('Usuario Logeado Correctamente!', 'Bienvenido!'); 
          this.router.navigateByUrl('/Menu-Usuarios', { skipLocationChange: true }); 
        }else if(this.lstUsuarios[0].rol == 2){
          this.toastr.success('Administrador Logeado Correctamente!', 'Bienvenido!'); 
          this.router.navigateByUrl('/Menu-Admin', { skipLocationChange: true }); 
        }
        console.log(this.lstUsuarios[0].rol);
      });
    }
}
interface  Usuario{
Correo:string;
Contrasena:string;
rol:number;
}
