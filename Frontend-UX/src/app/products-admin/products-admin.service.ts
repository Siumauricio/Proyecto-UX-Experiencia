import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newProduct, Product } from '../menu/Producto';
import { Observable } from 'rxjs';

@Injectable()

export class ProductsAdminService{

constructor(private http: HttpClient){

}
private APIProductos = 'http://localhost:5000/ProductsAdmin/getProducts';
private APIProductosPorId = 'http://localhost:5000/ProductsAdmin/getProductById';
private APIEditProducto = 'http://localhost:5000/ProductsAdmin/putProduct';
private APIAddProducto = 'http://localhost:5000/ProductsAdmin/addProduct';
private APIDeleteProducto = 'http://localhost:5000/ProductsAdmin/deleteProduct';

getProductos(): Observable<Product[]>{
    return this.http.get<Product[]>(this.APIProductos);
}

getProductById(id): Observable<Product> {
    return this.http.get<Product>(this.APIProductosPorId+id);
}

editProduct(form){
    return this.http.put<Product>(this.APIEditProducto,form);
}

addProduct(form){
    let data: newProduct=<newProduct>{"precio": +form.precio ,"nombre": form.nombre , "menuIdMenu": +form.menuIdMenu,
    "descripcion": form.descripcion,"url": form.url};
    return this.http.post(this.APIAddProducto,data);
}

deleteProduct(id){
    return this.http.delete(this.APIDeleteProducto+(+id));
}


}

