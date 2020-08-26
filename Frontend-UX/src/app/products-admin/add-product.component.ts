import { Component } from '@angular/core';
import { ProductsAdminService } from './products-admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { newProduct } from '../menu/Producto';


@Component({
    templateUrl: './add-product.component.html',
    styles:[
        `
        input, button, select, optgroup, textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            width: 400px;
          }
        em {float:right; color:#E05C65; padding-left: 10px;}
        `
    ]
})

export class AddProductComponent{
    isSave:Boolean=false;
    nombre;
    menuIdMenu
    precio;
    descripcion;
    url;

    isDirty(){
        let sizeName=(document.getElementById('nombre') as HTMLInputElement).value;
        let sizePrecio=(document.getElementById('precio') as HTMLInputElement).value;
        let sizeDescripcion=(document.getElementById('descripcion') as HTMLInputElement).value;
        let sizeUrl=(document.getElementById('url') as HTMLInputElement).value;
        if(sizeName.length>0  || sizePrecio.length>0  || sizeDescripcion.length>0  || sizeUrl.length>0)
            return true;
        return false; 
    }
    
    constructor(private productsAdmin: ProductsAdminService,private router: Router, private toastr: ToastrService){

    }

    saveProduct(form: newProduct){
        this.isSave=true;
        form.status=1;
        this.productsAdmin.addProduct(form).subscribe(res =>{
       },error=>{ console.log(error)});
       this.toastr.success("Se agrego", "Hecho!")
       return this.router.navigate(['products']);
}

cancel(){
    this.router.navigate(['products']);
}

}