import {Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "menu1-class",
    templateUrl: "./Pizzas.component.html"
})

export class Menu1Component implements OnInit{
lstProducts: Object;

    private API = 'http://localhost:5000/Menu/getPizzas';
    constructor(private http: HttpClient){}
 
ngOnInit(){
   // document.getElementById('slideshow').style.display='none';
    return this.http.get(this.API).subscribe(res =>{
        this.lstProducts=res;
    },error=>{ console.log(error)});
 }


 
}
