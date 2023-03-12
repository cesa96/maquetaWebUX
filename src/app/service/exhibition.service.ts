import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exhibition } from '../model/exhibition.model';
import { Artwork } from '../model/artwork.model';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  private apiUrlGetExhibition: string = environment.baseUrl  + 'museums/{{museum_id}}/exhibitions';
  private apiUrlGetExhibitionArtWork: string = environment.baseUrl  + 'exhibitions/{{exhibition_id}}/artworks';
  private apiUrlAddArtWork: string = environment.baseUrl  + 'exhibitions/{{exhibition_id}}/artworks/{{artwork_id}}/';
  constructor(private http: HttpClient) { }

  getExhibitions(museum_id:string): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(this.apiUrlGetExhibition.replace('{{museum_id}}', museum_id));
  }

  getArtWorks(exhibition_id:string): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrlGetExhibitionArtWork.replace('{{exhibition_id}}', exhibition_id));
  }

  createExhibition(museum_id:string, exhibition: Exhibition): Observable<Exhibition> {
    return this.http.post<Exhibition>(this.apiUrlGetExhibition.replace('{{museum_id}}', museum_id), exhibition);
  }

  addArtwork(exhibition_id:string, artwork_id: string): Observable<Exhibition> {
    return this.http.post<Exhibition>(this.apiUrlAddArtWork.replace('{{exhibition_id}}', exhibition_id).replace('{{artwork_id}}', artwork_id), null);
  }

}
