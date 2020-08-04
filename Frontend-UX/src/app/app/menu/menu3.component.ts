import {Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "menu3-class",
    templateUrl: "./Bebidas.component.html"

})

export class Menu3Component{
lstProducts: Object;

    private API = 'http://localhost:5000/Menu/getPostres';
    constructor(private http: HttpClient){}
 
ngOnInit(){
    return this.http.get(this.API).subscribe(res =>{
        this.lstProducts=res;
    },error=>{ console.log(error)});
 }
    
}