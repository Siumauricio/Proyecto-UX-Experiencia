import {Component, OnInit} from '@angular/core';
import { ProductsAdminService } from './products-admin.service';
import { RouterLink, Router } from '@angular/router';


@Component({
    selector: 'products',
    templateUrl: './products-admin.component.html'

})


export class ProductsComponent{
    lstProducts:any;
    imageWidth=50;
    imageMargin=2;
    
    constructor(private productsAdmin: ProductsAdminService, private router: Router){

    }


    filtrar(){
        let value=+(document.getElementById('menuIdMenu') as HTMLInputElement).value;
        this.productsAdmin.getProductosByMenu(value).subscribe( res=>{
            this.lstProducts=res;
        }, error=>{console.log(error)});

    }

    Eliminar(id){
        if(window.confirm("¿Seguro que desea eliminar el producto?")){
            this.productsAdmin.deleteProduct(id).subscribe( res=>{     
            }, error=>{console.log(error)});
            this.router.navigate(['/products'])  
        }
    }


}
