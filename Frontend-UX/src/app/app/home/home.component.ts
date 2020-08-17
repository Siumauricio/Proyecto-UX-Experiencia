
import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
 
  })

export class HomeComponent implements OnInit {
  ngOnInit(){
    document.getElementById('carrito').style.display='none';
    document.getElementById('logout-ux').style.display='none';
    document.getElementById('Panel-ux').style.display='none';
    document.getElementById('chat-ux').style.display='none';
    
  }
   
}