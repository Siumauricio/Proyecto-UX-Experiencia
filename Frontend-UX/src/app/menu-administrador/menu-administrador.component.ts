import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('reglog-ux1').style.display='none';
    document.getElementById('reglog-ux2').style.display='none';
    document.getElementById('logout-ux').style.display='inline';
    document.getElementById('Panel-ux').style.display='inline';
    document.getElementById('chat-ux').style.display='inline';
    document.getElementById('footer-ux').style.display='none';
  
  }

}
