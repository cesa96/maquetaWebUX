import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Inject, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ErrorModel} from "./model/error.model";

@Injectable({ providedIn: "root" })
export class AppErrorHandler implements ErrorHandler {

  constructor(@Inject(Injector) private injector: Injector, private router: Router) {
  }

  errorApi : ErrorModel = new ErrorModel();
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }


  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 400: {
          this.errorApi = error.error;
          this.toastrService.error("The request could not be processed");
          return;
        }
        case 401: {
          this.errorApi = error.error;
          this.toastrService.error("The session has timed out!");
          this.router.navigateByUrl("");
          return;
        }
        case 403: {
          this.errorApi = error.error;
          this.toastrService.error("You are not authorized to execute the request");
          return;
        }
        case 404: {
          this.errorApi = error.error;
          this.toastrService.error("The requested resource could not be found");
          return;
        }
        case 500: {
          this.toastrService.error("Internal services are failing please try again Internal services are failing please try again!",this.errorApi.title);
          return;
        }
      }
    }
  }
}
