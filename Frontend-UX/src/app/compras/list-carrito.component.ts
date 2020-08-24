import { Component, OnInit, ɵConsole } from "@angular/core";
import { SendProductsService } from "../menu/sendProducts.service";

@Component({
  templateUrl: "./list-carrito.component.html",
})
export class listCarritoComponent implements OnInit {
  listaProductos = [];
  subTotal = 0;
  total
  constructor(private carritoService: SendProductsService) {}

  ngOnInit() {
    console.log(
      "Listado de productos actuales : ",
      this.carritoService.getListaProductos()
    );
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
        total += this.listaProductos[i].precio;
      }
    }
    this.carritoService.actualizarTotal(total + this.subTotal); 
    return total + this.subTotal;
  }

  cambiarTotal(producto) {
    var valor = +(document.getElementById("valor"+producto.idProducto) as HTMLInputElement).value;
    this.subTotal = producto.precio * valor - producto.precio;
  }
}
