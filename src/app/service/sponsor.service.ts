import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sponsor } from '../model/sponsor.model';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  private apiUrlGetSoponsors: string = environment.baseUrl  + 'sponsors';
  constructor(private http: HttpClient) { }

  getSponsors(): Observable<Sponsor[]> {
    return this.http.get<Sponsor[]>(this.apiUrlGetSoponsors);
  }

  createSponsor(sponsor: Sponsor): Observable<Sponsor> {
    return this.http.post<Sponsor>(this.apiUrlGetSoponsors, sponsor);
  }


}




