import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newProduct, Product } from '../menu/Producto';
import { Observable } from 'rxjs';

@Injectable()

export class ProductsAdminService{

constructor(private http: HttpClient){

}
private APIProductosByMenu = 'http://localhost:5000/ProductsAdmin/getProductsByMenu';
private APIProductosPorId = 'http://localhost:5000/ProductsAdmin/getProductById';
private APIEditProducto = 'http://localhost:5000/ProductsAdmin/putProduct';
private APIAddProducto = 'http://localhost:5000/ProductsAdmin/addProduct';
private APIDeleteProducto = 'http://localhost:5000/ProductsAdmin/deleteProduct';
private APIChangeStatus = 'http://localhost:5000/ProductsAdmin/ProductStatus';


getProductosByMenu(idMenu): Observable<Product[]>{
    return this.http.get<Product[]>(this.APIProductosByMenu+idMenu);
}

getProductById(id): Observable<Product> {
    return this.http.get<Product>(this.APIProductosPorId+id);
}

editProduct(form){
    return this.http.put<Product>(this.APIEditProducto,form);
}

addProduct(form){
    let data: newProduct=<newProduct>{"precio": +form.precio ,"nombre": form.nombre , "menuIdMenu": +form.menuIdMenu,
    "descripcion": form.descripcion,"url": form.url, "status": form.status};
    return this.http.post(this.APIAddProducto,data);
}

deleteProduct(id){
    return this.http.delete(this.APIDeleteProducto+(+id));
}

changeStatus(form: Product){
    return this.http.put(this.APIChangeStatus,form);
}


}

