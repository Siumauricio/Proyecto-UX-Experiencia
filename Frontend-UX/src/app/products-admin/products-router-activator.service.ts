import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProductsAdminService } from './products-admin.service';

@Injectable()

export class ProductRouterActivator implements CanActivate{
constructor(private router:Router, private productsAdmin: ProductsAdminService){}

canActivate(route : ActivatedRouteSnapshot){
    let existeProducto=!!this.productsAdmin.getProductById(+route.params['id']).subscribe(res =>{
    },error=>{ });
    if(!existeProducto)
        this.router.navigate(['products']);

    return true;
}


}