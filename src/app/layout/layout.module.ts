import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppLayoutMainComponent } from "./layout-main/layout-main.component";
import { AppHttpInterceptor } from "../app.http.interceptor";
import { CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
    declarations: [
        AppLayoutMainComponent,
    ],
    imports: [
      RouterModule,
      CommonModule,
      BrowserAnimationsModule,
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
export class AppLayoutModule { }
