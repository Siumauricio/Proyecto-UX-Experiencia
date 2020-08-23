import { Component, OnInit } from '@angular/core';
import { AuthService, Usuario } from '../auth-service/auth-service.component';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {
  ls:Usuario
  constructor(private authService:AuthService) { }

  ngOnInit() {
  //  document.getElementById('nabvar-ux').style.display='none';
  //  document.getElementById('footer-ux').style.display='none';
    document.getElementById('reglog-ux1').style.display='none';
    document.getElementById('reglog-ux2').style.display='none';
    document.getElementById('carrito').style.display='inline';
    document.getElementById('logout-ux').style.display='inline';
    document.getElementById('chat-ux').style.display='inline';
    this.ls = this.authService.getUser();
    console.log(this.ls)
  }

}
