import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from 'src/app/auth-service/auth-service.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/menu/Reviews.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector:'app-compras',
  templateUrl: "./detalle.orden.component.html",
})
export class DetalleOrdenComponent implements OnInit {
  listaDetalles ;
  idOrden;
  url;
  nombre;
  idProducto:number
  private API = "http://localhost:5000/api/Admin/getDetails/";
  private routeSub: Subscription;

  constructor(private http: HttpClient, private authService: AuthService,private route: ActivatedRoute,private reviewsService:ReviewsService,private toastrService:ToastrService) {}


  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params => {
        this.idOrden = +params['id'];
        console.log(params['id']) //log the value of id
      });
    this.http.post(this.API  +this.idOrden,this.idOrden).subscribe(
        (res) => {
            this.listaDetalles = res
            console.log(res)
        },
        (error) => {},
        () => {
          console.log("Transaccion echa");
        }
      );
  }

  addReviews() {
    var range = (document.getElementById("range") as HTMLInputElement).value;
    var comments = (document.getElementById(
      "comment"
    ) as HTMLInputElement).value;

     this.reviewsService.addReviews( this.idProducto, range, comments);
     this.toastrService.success("Review Ingresada,Exitoso!");
  }
  img(url,nombre,id){
      console.log(url)
    this.url = url
    this.nombre = nombre
    this.idProducto = +id
    console.log(id)
  }

}