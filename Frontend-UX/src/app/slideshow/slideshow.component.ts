import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth-service/auth-service.component";

@Component({
  selector: "slideshow-class",
  templateUrl: "./slideshow.component.html",
})
export class SlideShowComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}
}
