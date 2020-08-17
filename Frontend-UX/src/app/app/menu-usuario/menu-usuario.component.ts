import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //  document.getElementById('nabvar-ux').style.display='none';
  //  document.getElementById('footer-ux').style.display='none';
    document.getElementById('reglog-ux1').style.display='none';
    document.getElementById('reglog-ux2').style.display='none';
    document.getElementById('carrito').style.display='inline';
    document.getElementById('logout-ux').style.display='inline';
  }

}
