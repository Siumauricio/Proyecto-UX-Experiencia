import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Producto';


@Injectable()


export class ProductsListService{

    private APIBebidas = 'http://localhost:5000/Menu/getBebidas';
    private APIPizzas = 'http://localhost:5000/Menu/getPizzas';
    private APIPostres = 'http://localhost:5000/Menu/getPostres';

    constructor(private http : HttpClient){}
  lst:any;

    getDrinks(){
      return  this.http.get(this.APIBebidas)
    }


    getPizzas(){
      return  this.http.get<Product[]>(this.APIPizzas)
    }

    getDessert(){
      return  this.http.get(this.APIPostres)

    }


}




