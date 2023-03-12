import { TestBed, async, inject } from '@angular/core/testing';
import { ArtworkService } from '../artwork.service';
import { faker } from "@faker-js/faker";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArtistService } from '../artist.service';


describe('Service: Artwork', () => {

  let artistService: ArtistService;

  beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [ArtistService]
   });

   artistService = TestBed.inject(ArtistService)
 });

 it('should Service Artist', inject([ArtistService], (service: ArtistService) => {
   expect(service).toBeTruthy();
   expect(service).toBeTruthy();
 }));


it ('should get artists', (() => {
  artistService.getArtists().subscribe((artworks) => {
    expect(artworks.length).toBeGreaterThan(1);
  });
}));

});
