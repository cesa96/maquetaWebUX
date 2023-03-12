import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmOrderComponent, cancelar,  guardar } from './alarm-order/alarm-order.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {  MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


const ROUTES: Routes = [
  { path: "", component: AlarmOrderComponent }
];



@NgModule({
  declarations: [
    AlarmOrderComponent, cancelar, guardar
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule
  ]
})
export class AlarmOrderModule { }
