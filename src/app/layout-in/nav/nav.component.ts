import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class AppNavComponent implements OnInit {

  constructor(location: Location, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }

}
