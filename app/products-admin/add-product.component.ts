import { Component } from '@angular/core';
import { ProductsAdminService } from './products-admin.service';
import { Router } from '@angular/router';


@Component({
    templateUrl: './add-product.component.html',
    styles:[
        `
        em {float:right; color:#E05C65; padding-left: 10px;}
        `
    ]
})

export class AddProductComponent{
    isDirty:boolean=true;
    nombre;
    menuIdMenu;
    precio;
    descripcion;
    url;

    constructor(private productsAdmin: ProductsAdminService,private router: Router){
    }

saveProduct(form){
    this.productsAdmin.addProduct(form).subscribe(res =>{
       },error=>{ console.log(error)});
       this.isDirty=false;
       this.router.navigate(['products']);
}
cancel(){
    this.isDirty=false;
    this.router.navigate(['products']);
}

}