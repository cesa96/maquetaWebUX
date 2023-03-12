import { TestBed } from '@angular/core/testing';

import { AppErrorHandler } from './app.error.handler';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES} from "./app-routing.module"

describe('AppErrorHandler', () => {

  let mocks: any;
  let handlerService: AppErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppErrorHandler],
      imports: [RouterTestingModule.withRoutes(ROUTES)]
    });
  });

  beforeEach( () => {
    handlerService = TestBed.inject(AppErrorHandler);
  });

  beforeEach(() => {
    loadMocks();
  });

  describe('create', () => {
    it('should create service', () => {
      expect(AppErrorHandler).toBeTruthy();
    });
  });

  describe('should handle errors', () => {
    it('should handle HttpErrorResponse', () => {
      try {
        handlerService.handleError(mocks.httpError);
        expect(handlerService.errorApi.errors)
          .toHaveBeenCalledWith('There was an HTTP error.', mocks.httpError.message, 'Status code: ', mocks.httpError.status);
      } catch (error) {}
    });

    it('should handle TypeError', () => {
      try {
        handlerService.handleError(mocks.typeError);
        expect(handlerService.errorApi.errors).toHaveBeenCalledWith('There was a Type error.', mocks.typeError.message);
      } catch (error) {}
    });

    it('should handle Error', () => {
      try {
        handlerService.handleError(mocks.error);
        expect(handlerService.errorApi.errors).toHaveBeenCalledWith('There was a general error.', mocks.error.message);
      } catch (error) {}
    });

    it('should handle default', () => {
      try {
        handlerService.handleError(mocks.defaultError);
        expect(handlerService.errorApi.errors).toHaveBeenCalledWith('Nobody threw an Error but something happened!', mocks.defaultError);
      } catch (error) {}
    });

  });

  function loadMocks() {
    mocks = {
      httpError: { constructor: HttpErrorResponse, message: 'Http error message', status: 400},
      typeError: { constructor: TypeError, message: 'TypeError message'},
      error: { constructor: Error, message: 'Error message'},
      defaultError: 'Default message'
    };
  }

});
