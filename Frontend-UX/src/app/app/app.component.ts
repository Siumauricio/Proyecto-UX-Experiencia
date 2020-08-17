import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
  disabled: boolean = true;
  title = 'app';
  isWeb(){
    return this.disabled;
  }
}



