import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent, DialogAnimationsExampleDialog } from './singup/singup.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'


const ROUTES: Routes = [
  {
      path: '',
      component: SingupComponent,
  }
]

@NgModule({
  declarations: [
    SingupComponent, DialogAnimationsExampleDialog
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild(ROUTES),
  ],
  bootstrap: [DialogAnimationsExampleDialog]
})
export class SingupModule { }
