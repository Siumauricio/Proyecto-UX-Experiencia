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
  ],

  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot([ 
    { path: '', component: DefaultComponent, pathMatch: 'full' },
    {path: 'Pizzas', component: Menu1Component},
    {path: 'Bebidas', component: Menu2Component},
    {path: 'Postres', component: Menu3Component},
    {path: 'Home', component: DefaultComponent},
    ])
  ],

  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
