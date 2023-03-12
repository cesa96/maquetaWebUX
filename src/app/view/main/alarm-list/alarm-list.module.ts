import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmListComponent, eliminar,  eliminarExito } from './alarm-list/alarm-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';
import {  MatDialogModule } from '@angular/material/dialog';

const ROUTES: Routes = [
  { path: "", component: AlarmListComponent }
];

@NgModule({
  declarations: [
    AlarmListComponent, eliminar, eliminarExito
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
    ]
})
export class AlarmListModule { }
