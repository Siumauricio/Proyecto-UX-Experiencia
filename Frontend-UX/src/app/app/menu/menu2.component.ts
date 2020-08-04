import {Component,OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({

    selector: "menu2-class",
    templateUrl: "./Bebidas.component.html"

})

export class Menu2Component implements OnInit{
    lstProducts: Object;
    lstReviews: Object;
    lstextract: Object;
    url:string;
    id: string;
    nombre: string;

    private API = 'http://localhost:5000/Menu/getBebidas';
    private API2 = 'http://localhost:5000/Reviews/getReviews';
    constructor(private http: HttpClient){}
    
        
ngOnInit(){
    document.getElementById('slideshow').style.display='none';
    return this.http.get(this.API).subscribe(res =>{
        this.lstProducts=res;
    },error=>{ console.log(error)});
 }

 reviews(){
    this.lstextract=(document.getElementById('object') as HTMLInputElement).value
    console.log(this.lstextract);
    this.http.get(this.API2+this.id).subscribe(res =>{
    this.lstReviews=res;
    },error=>{ console.log(error)});
 }
}

