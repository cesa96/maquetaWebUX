import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Time } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns = ['name', 'delete', 'expand'];
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('actividades', JSON.stringify(ELEMENT_DATA))
  }
  eliminar(): void {
    //localStorage.setItem('init', '1')
    this.dialog.open(eliminar, {
      height: '150px',
      width: '250px',
    });
  }
}

export interface Actividad {
  name: string;
  horaIni: string;
  fechaIni: string;
  fechaFin: string;
  lunes: string;
  martes: string;
  miercoles: string;
  jueves: string;
  viernes: string;
  sabado: string;
  domingo: string;
}

const ELEMENT_DATA: Actividad[] = [
  {
    name: 'Actividad 1',
    horaIni: '10:00',
    fechaIni: '01/01/2023',
    fechaFin: '31/12/2023',
    lunes: 'Y',
    martes: 'N',
    miercoles: 'Y',
    jueves: 'N',
    viernes: 'Y',
    sabado: 'Y',
    domingo: 'Y'
  },
  {
    name: 'Actividad 2',
    horaIni: '10:00',
    fechaIni: '01/01/2023',
    fechaFin: '31/12/2023',
    lunes: 'Y',
    martes: 'N',
    miercoles: 'Y',
    jueves: 'N',
    viernes: 'Y',
    sabado: 'Y',
    domingo: 'Y'
  },
  {
    name: 'Actividad 3',
    horaIni: '10:00',
    fechaIni: '01/01/2023',
    fechaFin: '31/12/2023',
    lunes: 'Y',
    martes: 'N',
    miercoles: 'Y',
    jueves: 'N',
    viernes: 'Y',
    sabado: 'Y',
    domingo: 'Y'
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
