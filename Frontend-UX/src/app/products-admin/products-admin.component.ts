import {Component, OnInit} from '@angular/core';
import { ProductsAdminService } from './products-admin.service';
import { RouterLink, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../menu/Producto';


@Component({
    selector: 'products',
    templateUrl: './products-admin.component.html'

})


export class ProductsComponent{
    lstProducts:any;
    imageWidth=50;
    imageMargin=2;
    
    constructor(private productsAdmin: ProductsAdminService, 
        private router: Router,
        private toastr: ToastrService){
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
            this.toastr.success("Se elimino el producto", "Hecho!")
            return this.router.navigate(['/products'])   
        }
        return false;
    }

    CambiarStatus(form: Product, status: number){
        var statusDescription;
        if(status==0){
            statusDescription="Desactivar";
        }else{
            statusDescription="Activar";
        }
        if(window.confirm("¿Seguro que desea " +statusDescription+" el producto?")){
            form.status=status;
            this.productsAdmin.changeStatus(form).subscribe( res=>{     
            }, error=>{console.log(error)})
            this.toastr.success("Se cambio el status", "Hecho!")
            return this.router.navigate(['/products']) 
        }
        return false;
    }

}
