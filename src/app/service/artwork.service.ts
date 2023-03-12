import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artwork } from '../model/artwork.model';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {


constructor(private http: HttpClient) { }

getArtworksArtist(artist_id:string): Observable<Artwork[]> {
  return this.http.get<Artwork[]>(environment.baseUrl  + 'artists/{{artist_id}}/artworks/'.replace('{{artist_id}}', artist_id));
}

getArtworks(): Observable<Artwork[]> {
  return this.http.get<Artwork[]>(environment.baseUrl  + 'artworks');
}


createArtwork(artwork: Artwork): Observable<Artwork> {
  return this.http.post<Artwork>(environment.baseUrl + 'artists/{{artist_id}}/artworks/'.replace('{{artist_id}}', artwork.artist.id.toString()), artwork);
}

}
