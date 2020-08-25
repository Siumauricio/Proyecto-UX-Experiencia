import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { newReviews } from "./Producto";

@Injectable()
export class SendProductsService {
  listaProductos: Carrito[] = [];
  private APIReviews = "http://localhost:5000/Reviews/getReviews";
  private APIAddReviews = "http://localhost:5000/Reviews/postAddReviews";
  constructor(private http: HttpClient) {}

  agregarProducto(producto: Carrito) {
    var data = this.listaProductos.find(function (element) {
      return element.idProducto == producto.idProducto;
    });
    if (data != null) {
      data.cantidad += 1;
      data.total = data.cantidad * data.precioUnitario;
    } else {
      this.listaProductos.push(producto);
    }
    console.log(this.listaProductos);
  }
  getListaProductos() {
    return this.listaProductos;
  }
  setListaProductos(listaActualizada) {
    this.listaProductos = listaActualizada;
  }
  cambiarCantidad(producto: Carrito, cantidad: number) {
    var data = this.listaProductos.find(function (element) {
      return element.idProducto == producto.idProducto;
    });
    if (data != null) {
      data.cantidad = cantidad;
      data.total = data.cantidad * data.precioUnitario;
    }
  }
}

export interface Carrito {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  total: number;
  url: string;
  cantidad: number;
}
