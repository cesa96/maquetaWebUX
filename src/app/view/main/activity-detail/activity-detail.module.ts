import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDetailComponent, cancelar,  guardar } from './activity-detail/activity-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {  MatDialogModule } from '@angular/material/dialog';
const ROUTES: Routes = [
  { path: "", component: ActivityDetailComponent }
];



@NgModule({
  declarations: [
    ActivityDetailComponent, cancelar, guardar
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
    MatCheckboxModule,
    MatDialogModule,

  ]
})
export class ActivityDetailModule { }
