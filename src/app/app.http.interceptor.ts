import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoaderService } from "./service/loader.service";
import { finalize } from "rxjs/operators";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    activeRequests: number = 0;

    constructor(private loaderService: LoaderService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let displayLoadingScreen = true


        if (displayLoadingScreen) {
            if (this.activeRequests === 0) {
                this.loaderService.startLoading()
            }
            this.activeRequests++

            return next.handle(request).pipe(
                finalize(() => {
                    this.activeRequests--
                    if (this.activeRequests === 0) {
                        this.loaderService.stopLoading()
                    }
                })
            )
        } else {
            return next.handle(request)
        }
    }
}





