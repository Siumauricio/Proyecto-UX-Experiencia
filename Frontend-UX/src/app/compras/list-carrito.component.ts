import { Component, OnInit, ɵConsole } from "@angular/core";
import { SendProductsService } from "../menu/sendProducts.service";
import { PagosService } from './pagos.service';
import { AuthService } from '../auth-service/auth-service.component';

@Component({
  templateUrl: "./list-carrito.component.html",
})
export class listCarritoComponent implements OnInit {
  listaProductos = [];
  constructor(private carritoService: SendProductsService,private pagosService:PagosService,private authService:AuthService) {}

  ngOnInit() {
    console.log("Listado de productos actuales : ",this.carritoService.getListaProductos());

    this.listaProductos = this.carritoService.getListaProductos();
  }

  borrarProducto(producto) {
    this.listaProductos = this.listaProductos.filter(
      (item) => item !== producto
    );
    this.carritoService.setListaProductos(this.listaProductos);
    console.log(this.listaProductos);
  }
  getTotalPago() {
    let total = 0;
    for (var i = 0; i < this.listaProductos.length; i++) {
      if (this.listaProductos[i]) {
        total += this.listaProductos[i].total;
      }
    }
    return total;
  }

  cambiarTotal(producto) {
    var valor = +(document.getElementById("valor"+producto.idProducto) as HTMLInputElement).value;
   this.carritoService.cambiarCantidad(producto,valor);
  }
  pagarProductos(){
    if(window.confirm("Desea pagar ?")){
      console.log("entre")
      this.pagosService.ingresarCompra(this.listaProductos,this.getTotalPago());
      this.listaProductos = []
      this.carritoService.listaProductos = []
    }
  }
}
