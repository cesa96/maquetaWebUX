import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-layout-main",
  templateUrl: "./layout-main.component.html"
})
export class AppLayoutMainComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    //var init = localStorage.getItem('init');

    //if (!(typeof init !== 'undefined' && init !== null) || init == '0'){

      this.router.navigate([{
        outlets: {
          secondchildren: ['login']
        }
      }])
    //} else       localStorage.setItem('init', '0');
  }
}
