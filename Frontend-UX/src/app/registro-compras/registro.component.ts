import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth-service/auth-service.component";

@Component({
  templateUrl: "./registro.component.html",
})
export class RegistroComprasComponent implements OnInit {
  listaOrdenes ;
  private API = "http://localhost:5000/api/Admin/getOrder/";

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(){
    this.http.post(this.API  +this.authService.getUser()[0].idUsuario,this.authService.getUser()[0].idUsuario).subscribe(
        (res) => {
            this.listaOrdenes = res
            console.log(res)
        },
        (error) => {},
        () => {
          console.log("Transaccion echa");
        }
      );
  }


}
