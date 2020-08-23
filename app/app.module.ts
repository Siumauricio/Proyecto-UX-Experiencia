import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './nav/navbar.component';
import { HomeComponent } from './home/home.component';
import { Menu1Component } from './menu/menu1.component';
import { Menu2Component } from './menu/menu2.component';
import { Menu3Component } from './menu/menu3.component';
import {RouterModule, Routes} from '@angular/router';
import { DefaultComponent } from './default.component';
import {FooterComponent} from './footer/footer.component';
import {SlideShowComponent} from './slideshow/slideshow.component';
import { ProductsListService } from './menu/Products.service';
import { ReviewsService } from './menu/Reviews.service';
import { ProductsComponent } from './products-admin/products-admin.component';
import { ProductsAdminService } from './products-admin/products-admin.service';
import { EditProductComponent } from './products-admin/edit-product.component';
import { ProductRouterActivator } from './products-admin/products-router-activator.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddProductComponent } from './products-admin/add-product.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    DefaultComponent,
    FooterComponent,
    SlideShowComponent,
    ProductsComponent,
    EditProductComponent,
    AddProductComponent

  ],

  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot([ 
    { path: '', component: DefaultComponent, pathMatch: 'full' },
    {path: 'menu/Pizzas', component: Menu1Component},
    {path: 'menu/Bebidas', component: Menu2Component},
    {path: 'menu/Postres', component: Menu3Component},
    {path: 'Home', component: DefaultComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/edit/:id', component: EditProductComponent, canActivate: [ProductRouterActivator]},
    {path: 'products/new', component: AddProductComponent, canDeactivate: ['canDeactivateCreateProduct']}
    
    ]),
    FormsModule, 
    ReactiveFormsModule
  ],

  providers: [
    ProductsListService,ReviewsService,ProductsAdminService,ProductRouterActivator,
      {provide: 'canDeactivateCreateProduct', useValue: checkForm}
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }

export function checkForm(component: AddProductComponent ){
if(component.isDirty){
  return window.confirm("¿Seguro que desea salir del formulario?");
}
return true;
}
