import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artist } from '../model/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {


constructor(private http: HttpClient) { }


getArtists(): Observable<Artist[]> {
  return this.http.get<Artist[]>(environment.baseUrl  + 'artists');
}

createArtist(artist: Artist): Observable<Artist> {
  return this.http.post<Artist>(environment.baseUrl  + 'artists', artist);
}

}
