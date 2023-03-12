import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppHttpInterceptor } from './app.http.interceptor';
import { environment } from 'src/environments/environment';


describe('Service: AppHttpInterceptor', () => {

  let interceptor: AppHttpInterceptor;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers:[ HttpClient, AppHttpInterceptor,
       {provide:HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true},
      ]
    });
    interceptor = TestBed.inject(AppHttpInterceptor);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should increment the counter request', ()=> {
    httpClient.get(environment.baseUrl  +'artists').subscribe(res => {
      expect(res).toBeTruthy();
      expect(interceptor.activeRequests).toBeGreaterThan(0);
    });

  });
});
