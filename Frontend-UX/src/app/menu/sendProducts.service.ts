import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { newReviews } from "./Producto";

@Injectable()
export class SendProductsService {
  listaProductos = []
  private APIReviews = "http://localhost:5000/Reviews/getReviews";
  private APIAddReviews = "http://localhost:5000/Reviews/postAddReviews";
  total = 0
  constructor(private http: HttpClient) {}

  agregarProducto(producto){
    this.listaProductos.push(producto);
  }
  getListaProductos(){
      return this.listaProductos;
  }
  setListaProductos(listaActualizada){
      this.listaProductos = listaActualizada;
  }
  actualizarTotal(total){
    this.total = total;
  }
  getTotal(){
      return this.total;
  }
}
