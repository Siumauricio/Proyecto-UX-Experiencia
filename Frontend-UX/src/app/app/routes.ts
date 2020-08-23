import { Routes } from "@angular/router";
import { SlideShowComponent } from './slideshow/slideshow.component';
import { Menu1Component } from './menu/menu1.component';
import { Menu2Component } from './menu/menu2.component';
import { Menu3Component } from './menu/menu3.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';

export const AppRoutes: Routes = [
    { path: '', component: SlideShowComponent, pathMatch: 'full' },
    {path: 'Home', component: SlideShowComponent },
    {path: 'Pizzas', component: Menu1Component},
    {path: 'Bebidas', component: Menu2Component},
    {path: 'Postres', component: Menu3Component},
    {path: 'Registro', component: RegistroComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Menu-Usuarios', component: MenuUsuarioComponent},
    {path: 'Menu-Admin', component: MenuAdministradorComponent},
    {path: 'Chat', component: ChatComponent}
]