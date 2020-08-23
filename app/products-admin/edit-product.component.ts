import {Component} from '@angular/core';
import { ProductsAdminService } from './products-admin.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: './edit-product.component.html',
    styles:[
        `
        input{
            color: black;
        }
        textarea{
            color: black;
            
        }

        `
    ]
})

export class EditProductComponent{
producto:any;
nombre;
precio;
descripcion;
url;

constructor(private productsAdmin: ProductsAdminService, private route: ActivatedRoute,private router: Router ){

}

ngOnInit(){
   this.productsAdmin.getProductById(+this.route.snapshot.params['id']).subscribe(res =>{
       this.producto=res;
       console.log(this.producto);
    },error=>{ console.log(error); });
}


editProduct(form){
    form.nombre=(document.getElementById('nombre') as HTMLInputElement).value;
    form.precio= +(document.getElementById('precio') as HTMLInputElement).value;
    form.idProducto= +form.idProducto;
    form.menuIdMenu= +form.menuIdMenu;
    form.descripcion=(document.getElementById('descripcion') as HTMLInputElement).value;
    form.url=(document.getElementById('url') as HTMLInputElement).value;
    this.productsAdmin.editProduct(form).subscribe(res =>{
        },error=>{ console.log(error)});
        this.router.navigate(['products']);
}

cancel(){

}

}
