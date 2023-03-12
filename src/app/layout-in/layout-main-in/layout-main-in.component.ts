import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-layout-main-in",
  templateUrl: "./layout-main-in.component.html"
})
export class AppLayoutMainInComponent implements OnInit {
  showFiller = false;
  constructor(private router: Router) {

  }

  ngOnInit() {
    console.log("Ingresos al metodo 23")

   this.router.navigate(['/in',{
      outlets: {
        firtschildren: ['activity-list']
      }
    }])
  }
}
