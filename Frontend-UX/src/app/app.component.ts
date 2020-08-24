import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth-service/auth-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
  disabled: boolean = true;
  isWeb(){
    return this.disabled;
  }
}



