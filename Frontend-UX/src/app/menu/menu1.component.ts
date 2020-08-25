import { Component, OnInit } from "@angular/core";
import { ProductsListService } from "./Products.service";
import { ReviewsService } from "./Reviews.service";
import { SendProductsService, Carrito } from "./sendProducts.service";

@Component({
  selector: "menu1-class",
  templateUrl: "./Pizzas.component.html",
})
export class Menu1Component implements OnInit {
  lstProducts: any;
  lstReviews: any;
  url: string;
  nombre: string;
  id: string;
  range: string;
  comments: string;

  constructor(
    private productsList: ProductsListService,
    private reviews: ReviewsService,
    private carritoService: SendProductsService
  ) {}

  ngOnInit() {
    this.productsList.getPizzas().subscribe(
      (res) => {
        this.lstProducts = res;
      },
      (error) => {
        console.log(error);
      }
    );
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
