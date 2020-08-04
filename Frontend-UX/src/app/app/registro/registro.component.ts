import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private API = 'http://localhost:5000/api/Admin/Registro';

  constructor(private http:HttpClient) { }

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
      error => {console.log(error)},
      ()=> {console.log("Registro completado sin ningun problema!")});
  }

}
interface  Usuario{
Correo:string;
Nombre:string;
Contrasena:string;
}
