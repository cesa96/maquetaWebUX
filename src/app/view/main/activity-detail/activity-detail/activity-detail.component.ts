import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actividad } from '../../activity-list/activity-list/activity-list.component';
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  actividades:Actividad[] | undefined
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.actividades = JSON.parse(localStorage.getItem('acividades')!) as Actividad[]
  }
  guardar(): void {
    //localStorage.setItem('init', '1')
    this.dialog.open(guardar, {
      height: '150px',
      width: '250px',
    });
  }
  cancelar(): void {
    //localStorage.setItem('init', '1')
    this.dialog.open(cancelar, {
      height: '150px',
      width: '250px',
    });
  }


}




@Component({
  selector: 'cancelar',
  templateUrl: './cancelar.html',
})
export class cancelar {
  constructor(public dialogRef: MatDialogRef<cancelar>, private router: Router) {}
  redireccionar(): void{
    this.router.navigate(['/in',{
      outlets: {
        firtschildren: ['activity-list'], secondchildren: []
      }
    }])
  }
}

@Component({
  selector: 'guardar',
  templateUrl: './guardar.html',
})
export class guardar {
  constructor(public dialogRef: MatDialogRef<guardar>, private router: Router) {}
  redireccionar(): void{
    this.router.navigate(['/in',{
      outlets: {
        firtschildren: ['activity-list'], secondchildren: []
      }
    }])
  }
}

