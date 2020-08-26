import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Carrito } from "../menu/sendProducts.service";
import { AuthService } from "../auth-service/auth-service.component";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable()
export class PagosService {
  idOrden: Number;

  private APICompras = "http://localhost:5000/api/Pagos/IngresarCompra";
  private APIOrden = "http://localhost:5000/api/Pagos/IngresarOrdenes";
  private APIEMAIL = "http://localhost:5000/api/Pagos/enviarEmail";

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ingresarCompra(listaProductos: Carrito[], total: number) {
    var orden = {
      ClientesIdCliente: this.authService.getUser()[0].idUsuario,
      TotalOrden: total,
    };
    this.http.post(this.APICompras, orden).subscribe(
      (res) => {
        this.idOrden = +res;
      },
      (error) => {},
      () => {
        console.log(listaProductos);
        var productos = "";
        for (var i = 0; i < listaProductos.length; i++) {

          var Orden_Producto = {
            OrdenesIdOrden: this.idOrden,
            ProductosIdProducto: listaProductos[i].idProducto,
            Cantidad: listaProductos[i].cantidad,
            TotalProducto: listaProductos[i].total,
          };
          this.http.post(this.APIOrden, Orden_Producto).subscribe(
            (res) => {},
            (error) => {},
            () => {
            }
          );
        }

        this.http.post(this.APIEMAIL +"/"+this.authService.getUser()[0].correo+"/"+this.idOrden+"/"+total,null).subscribe();

        this.toastrService.success("Compra realizada correctamente!\nSe te ha enviado un correo electronico de confirmacion");
        this.router.navigate(["/Home"]);
      }
    );
  }

  EnviarEmail(correo) {
    this.http.post(this.APIEMAIL, correo).subscribe(
      (res) => {},
      (error) => {},
      () => {}
    );
  }
}
