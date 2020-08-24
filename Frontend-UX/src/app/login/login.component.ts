import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Usuario, AuthService } from "../auth-service/auth-service.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form) {
    var usuario: Usuario = <Usuario>{
      correo: form.correo,
      contrasena: form.contrasena,
      rol: 0,
    };
    this.authService.loginUser(usuario);
  }
}
