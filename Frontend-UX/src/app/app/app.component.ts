// import { Router } from '@angular/router';
// import { HttpClient} from '@angular/common/http';
// import { Component, Injectable } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template:`
//   <app-registro></app-registro>
//   `
// })


// export class AppComponent {
//   public API = 'http://localhost:5000/api/Admin/Registro';
//   correo:string;
//   title = 'angular';

//   constructor(private http: HttpClient) {}

//     registrar(){
//       this.correo = (document.getElementById("usuario") as HTMLInputElement).value;
//       let data: Usuarios = <Usuarios>{ "correo": this.correo, };
//       return this.http.post<Usuarios[]>(this.API,data).subscribe(res=>{
//       console.log(res);
//       },error=>{console.log(error)},()=>{console.log("Metodo Funciono Bien!!")});
//     }

// }
// interface Usuarios{
//   correo:string;
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
  title = 'app';
}



