import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/layout.module';
import { AppLayoutInModule } from './layout-in/layout-in.module';
import { AppErrorHandler } from "./app.error.handler";
import { AppHttpInterceptor } from "./app.http.interceptor";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    AppLayoutModule,
    AppLayoutInModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  exports:[
    RouterModule
  ]
})
export class AppModule { }
