import { Component, OnInit } from "@angular/core";

declare const $: any

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class AppHeaderComponent implements OnInit {
  showFiller = false;
  ngOnInit() {

  }

  isMobileMenu() {
      return $(window).width() <= 991;
  }
}
