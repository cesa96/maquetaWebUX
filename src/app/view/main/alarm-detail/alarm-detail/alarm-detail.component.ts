import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Alarma } from '../../alarm-list/alarm-list/alarm-list.component';
@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.css']
})
export class AlarmDetailComponent implements OnInit {
  alarmas:Alarma[] | undefined
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.alarmas = JSON.parse(localStorage.getItem('alarmas')!) as Alarma[]
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
        firtschildren: ['alarm-list'], secondchildren: []
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
        firtschildren: ['alarm-list'], secondchildren: []
      }
    }])
  }
}

