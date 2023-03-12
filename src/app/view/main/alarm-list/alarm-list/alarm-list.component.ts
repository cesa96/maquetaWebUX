import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Time } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})
export class AlarmListComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns = ['name', 'delete', 'expand'];
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('alarmas', JSON.stringify(ELEMENT_DATA))
  }
  eliminar(): void {
    //localStorage.setItem('init', '1')
    this.dialog.open(eliminar, {
      height: '150px',
      width: '250px',
    });
  }
}

export interface Alarma {
  name: string;
}

const ELEMENT_DATA: Alarma[] = [
  {
    name: 'Alarma 1'
  },
  {
    name: 'Alarma 2',
  },
  {
    name: 'Alarma 3',
  }];


  @Component({
    selector: 'eliminar',
    templateUrl: './eliminar.html',
  })
  export class eliminar {
    constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<eliminar>, private router: Router) {}
    eliminar(): void{
      this.dialog.open(eliminarExito, {
        height: '150px',
        width: '250px',
      });
    }
  }

  @Component({
    selector: 'eliminar-exito',
    templateUrl: './eliminar-exito.html',
  })
  export class eliminarExito {
    constructor(public dialogRef: MatDialogRef<eliminarExito>, private router: Router) {}
  }
