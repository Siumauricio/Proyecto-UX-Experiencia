import { Component, OnInit } from "@angular/core";
import { ProductsListService } from "./Products.service";
import { ReviewsService } from "./Reviews.service";
import { SendProductsService, Carrito } from "./sendProducts.service";
import { AuthService } from '../auth-service/auth-service.component';

@Component({
  selector: "menu3-class",
  templateUrl: "./Bebidas.component.html",
})
export class Menu3Component {
  lstProducts: any;
  lstReviews: any;
  url: string;
  nombre: string;
  id: string;
  range: string;
  comments: string;

  load:boolean=false;
  
  constructor(
    private productsList: ProductsListService,
    private reviews: ReviewsService,
    private carritoService: SendProductsService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    setTimeout(()=>{
      this.productsList.getProducts(3).subscribe(
        (res) => {
          this.lstProducts = res;
        },
        (error) => {
          console.log(error);
        }
      );
      this.load =true;
      },700
      )
  }

  showReviews(pr) {
    this.hideOptionReview();
    this.url = pr.url;
    this.nombre = pr.nombre;
    this.id = pr.idProducto;
    this.reviews.getReviews(pr.idProducto).subscribe(
      (res) => {
        this.lstReviews = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addReviews() {
    this.range = (document.getElementById("range") as HTMLInputElement).value;
    this.comments = (document.getElementById(
      "comment"
    ) as HTMLInputElement).value;
    this.reviews.addReviews(this.id, this.range, this.comments);
    this.hideOptionReview();
  }

  agregarCarrito(producto) {
    var pr = <Carrito>{
      idProducto: +producto.idProducto,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precioUnitario: +producto.precio,
      total: +producto.precio,
      url: producto.url,
      cantidad: 1,
    };
    this.carritoService.agregarProducto(pr);
  }
  hideOptionReview() {
    document.getElementById("esconder").style.display = "none";
  }

  showOptionReview() {
    document.getElementById("esconder").style.display = "inline";
  }
}
