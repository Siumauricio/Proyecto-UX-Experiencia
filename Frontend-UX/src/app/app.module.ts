import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { Menu1Component } from './menu/menu1.component';
import { Menu2Component } from './menu/menu2.component';
import { Menu3Component } from './menu/menu3.component';
import { FooterComponent } from './footer/footer.component';
import { SlideShowComponent } from './slideshow/slideshow.component';
import { RegistroComponent } from './registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { ChatComponent } from './chat/chat.component';
import { SignalRService } from './chat/signalR.service';
import { AuthService } from './auth-service/auth-service.component';
import { AppRoutes } from './routes';
import { ProductsComponent } from './products-admin/products-admin.component';
import { EditProductComponent } from './products-admin/edit-product.component';
import { ProductRouterActivator } from './products-admin/products-router-activator.service';
import { AddProductComponent } from './products-admin/add-product.component';
import { ProductsListService } from './menu/Products.service';
import { ReviewsService } from './menu/Reviews.service';
import { ProductsAdminService } from './products-admin/products-admin.service';
import { listCarritoComponent } from './compras/list-carrito.component';
import { SendProductsService } from './menu/sendProducts.service';
import { PagosService } from './compras/pagos.service';
import { RegistroComprasComponent } from './registro-compras/registro.component';
import { DetalleOrdenComponent } from './registro-compras/detalle-orden/detalle.orden.component';
import { Menu4Component } from './menu/menu4.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    FooterComponent,
    RegistroComponent,
    SlideShowComponent,
    LoginComponent,
    MenuUsuarioComponent,
    MenuAdministradorComponent,
    ChatComponent,
    ProductsComponent,
    EditProductComponent,
    AddProductComponent,
    listCarritoComponent,
    RegistroComprasComponent,
    DetalleOrdenComponent,
    Menu4Component

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[RouterModule],
  providers: [SignalRService,AuthService,
    ProductsListService,ReviewsService,ProductsAdminService,ProductRouterActivator,
    {provide: 'canDeactivateCreateProduct', useValue: checkForm},SendProductsService,PagosService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkForm(component: AddProductComponent ){
  if(component.isDirty()&& !component.isSave){
    return window.confirm("¿Seguro que desea salir del formulario?");
  }
  return true;
  }
  