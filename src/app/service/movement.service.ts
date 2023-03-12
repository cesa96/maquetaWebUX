import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movement } from "../model/movement";

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private apiUrl: string = environment.baseUrl + 'movements';

  constructor(private http: HttpClient) { }

  createMovement(movement: Movement): Observable<Movement> {
    return this.http.post<Movement>(this.apiUrl, movement);
  }

}
