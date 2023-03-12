import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Exhibition } from "../model/exhibition.model";
import { Museum } from "../model/museum.model";

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  private apiUrl: string = environment.baseUrl + 'museums';

  constructor(private http: HttpClient) { }

  getMuseums(): Observable<Museum[]> {
    return this.http.get<Museum[]>(this.apiUrl);
  }

  createMuseum(museum: Museum): Observable<Museum> {
    return this.http.post<Museum>(this.apiUrl, museum);
  }

  getExhibitions(id: string): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(this.apiUrl + "/" + id + "/exhibitions");
  }
}
