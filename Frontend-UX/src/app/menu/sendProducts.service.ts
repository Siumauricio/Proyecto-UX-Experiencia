import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { newReviews } from "./Producto";

@Injectable()
export class SendProductsService {
  listaProductos = []
  private APIAddOrder = "http://localhost:5000/Shopping/addOrder";
  private APIAddOrderDetails = "http://localhost:5000/Shopping/addOrderDetails";
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

  saveOrder(form){
    
    return this.http.post(this.APIAddOrder,form);

  }


}
