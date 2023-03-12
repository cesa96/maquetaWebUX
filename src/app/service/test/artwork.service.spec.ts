import { TestBed, async, inject } from '@angular/core/testing';
import { ArtworkService } from '../artwork.service';
import { faker } from "@faker-js/faker";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Artist } from 'src/app/model/artist.model';
import { Artwork } from 'src/app/model/artwork.model';
import { ArtworkType } from 'src/app/enum/artworktype.enum';


describe('Service: Artwork', () => {

  let artworkService: ArtworkService;

  beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [ArtworkService]
   });

   artworkService = TestBed.inject(ArtworkService)
 });

 it('should Service Artwork', inject([ArtworkService], (service: ArtworkService) => {
   expect(service).toBeTruthy();
   expect(service).toBeTruthy();
 }));


it ('should get artworks', (() => {
   artworkService.getArtworks().subscribe((artworks) => {
     expect(artworks.length).toBeGreaterThan(1);
    });
}));

it ('should get artworks by artist', (() => {
  artworkService.getArtworksArtist('1').subscribe((artworks) => {
    expect(artworks.length).toBeGreaterThan(1);
  });
}));

});
