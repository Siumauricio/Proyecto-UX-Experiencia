import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
@Injectable()
export class AuthService {
  private API = "http://localhost:5000/api/Admin/";
  user: Usuario;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  loginUser(usuario: Usuario) {
    let hdrs = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post<Usuario>(this.API +"Login", usuario, hdrs).subscribe(
      (res) => {
        this.user = res;
        console.log("Usuario Log In:", res);
      },
      (error) => {
        this.toastr.warning("Error: Usuario Invalido", "Usuario!");
      },
      () => {
        if (this.user[0].rol == 1) {
          this.toastr.success("Usuario Logeado Correctamente!", "Bienvenido!");
          this.router.navigate(["/Home"]);
        } else if (this.user[0].rol == 2) {
          this.toastr.success(
            "Administrador Logeado Correctamente!",
            "Bienvenido!"
          );
          this.router.navigate(["/Home"]);
        }
      }
    );
  }
  getUser() {
    return this.user;
  }
  estaAutenticado() {
    return !!this.user;
  }
  esAdmin(){
    if (this.user[0].rol==2){
      return true;
    }
    return false;
  }

  registrarUser(usuario: Usuario_Reg) {
    let hdrs = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post<Usuario_Reg>(this.API+"Registro", usuario, hdrs).subscribe(
      (res) => {},
      (error) => {},
      () => {
        this.router.navigate(["/Home"]);
      }
    );
  }
}
export interface Usuario {
  correo: string;
  contrasena: string;
  rol: number;
  idUsuario: number;
  
}

export interface Usuario_Reg {
  Correo: string;
  Nombre: string;
  Contrasena: string;
}
