import {Component} from '@angular/core';
import { ProductsAdminService } from './products-admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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
        input, button, select, optgroup, textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            width: 400px;
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

constructor(private productsAdmin: ProductsAdminService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService ){
}

ngOnInit(){
   this.productsAdmin.getProductById(+this.route.snapshot.params['id']).subscribe(res =>{
       this.producto=res;
       console.log(this.producto);
    },error=>{ console.log(error); });

};


editProduct(form){
    form.nombre=(document.getElementById('nombre') as HTMLInputElement).value;
    form.precio= +(document.getElementById('precio') as HTMLInputElement).value;
    form.idProducto= +form.idProducto;
    form.menuIdMenu= +form.menuIdMenu;
    form.descripcion=(document.getElementById('descripcion') as HTMLInputElement).value;
    form.url=(document.getElementById('url') as HTMLInputElement).value;
    this.productsAdmin.editProduct(form).subscribe(res =>{
        },error=>{ console.log(error)});
        this.toastr.success("Se edito", "Hecho!")
        return this.router.navigate(['products']);
}

cancel(){
     return this.router.navigate(['products']);
}

}
