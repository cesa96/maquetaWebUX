import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'


const ROUTES: Routes = [
  {
      path: '',
      component: LoginComponent,
  }
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class SinginModule { }
