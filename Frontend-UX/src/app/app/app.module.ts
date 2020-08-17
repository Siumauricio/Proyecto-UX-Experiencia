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
import { ChatServiceComponent } from './chat-service/chat-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    FooterComponent,
    SlideShowComponent,
    RegistroComponent,
    SlideShowComponent,
    LoginComponent,
    MenuUsuarioComponent,
    MenuAdministradorComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot([ 
    { path: '', component: SlideShowComponent, pathMatch: 'full' },
    {path: 'Home', component: SlideShowComponent},
    {path: 'Pizzas', component: Menu1Component},
    {path: 'Bebidas', component: Menu2Component},
    {path: 'Postres', component: Menu3Component},
    {path: 'Registro', component: RegistroComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Menu-Usuarios', component: MenuUsuarioComponent},
    {path: 'Menu-Admin', component: MenuAdministradorComponent},
    {path: 'Chat', component: ChatComponent}
    ])
  ],
  exports:[RouterModule],
  providers: [ChatServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
