import {Component} from '@angular/core';


@Component({
selector: "navbar-class",
templateUrl: "./navbar.component.html",

})

export class NavbarComponent {

mostrar(){
      document.getElementById('slideshow').style.display='inline';
}


}
