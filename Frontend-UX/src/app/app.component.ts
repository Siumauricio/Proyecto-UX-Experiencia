/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-UX';
}*/


import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Local } from 'protractor/built/driverProviders';
import { Component, Inject, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit{
  public API = 'http://localhost:5000/values';
  public JOGGING_RECORDS_ENDPOINT = `${this.API}/weatherforecast`;

  title = 'angular';

constructor(private http: HttpClient) {}

ngOnInit(){
  var hola;
  return this.http.get(this.API).subscribe(res => {
    console.log(res);
  });
}
}
