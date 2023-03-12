import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {

  constructor(public dialog: MatDialog, private router: Router) {}


  openDialog(): void {
    //localStorage.setItem('init', '1')
    this.dialog.open(DialogAnimationsExampleDialog, {
      height: '150px',
      width: '250px',
    });






  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private router: Router) {}
  redireccionar(): void{
    this.router.navigate([{
      outlets: {
        secondchildren: ['login']
      }
    }])
  }
}

