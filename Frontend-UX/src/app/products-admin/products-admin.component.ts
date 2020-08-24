import {Component, OnInit} from '@angular/core';
import { ProductsAdminService } from './products-admin.service';
import { RouterLink, Router } from '@angular/router';


@Component({
    selector: 'Products',
    templateUrl: './products-admin.component.html'

})


export class ProductsComponent implements OnInit{
    lstProducts:any;
    imageWidth=50;
    imageMargin=2;
    
    constructor(private productsAdmin: ProductsAdminService, private router: Router){

    }

    ngOnInit(){
        //document.getElementById('slideshow').style.display='none';
        this.productsAdmin.getProductos().subscribe( res=>{
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
