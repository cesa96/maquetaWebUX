import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppFooterComponent } from "./footer/footer.component";
import { AppHeaderComponent } from "./header/header.component";
import { AppLayoutMainInComponent } from "./layout-main-in/layout-main-in.component";
import { LoaderComponent } from './loader/loader.component';
import { AppNavComponent } from "./nav/nav.component";
import { AppHttpInterceptor } from "../app.http.interceptor";
import { CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    declarations: [
        AppFooterComponent,
        AppHeaderComponent,
        AppLayoutMainInComponent,
        LoaderComponent,
        AppNavComponent
    ],
    imports: [
      RouterModule,
      CommonModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatCardModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      MatSidenavModule,



        ToastrModule.forRoot({
        timeOut: 5000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        progressBar: true,
      }),
    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppHttpInterceptor,
          multi: true
        }
      ]
})
export class AppLayoutInModule { }
