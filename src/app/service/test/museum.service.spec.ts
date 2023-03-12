import { TestBed, inject } from '@angular/core/testing';
import { MuseumService } from '../museum.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Museum', () => {
  let service: MuseumService;
  beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [MuseumService]
   });
 });

  it('should ...', inject([MuseumService], (service: MuseumService) => {
   expect(service).toBeTruthy();
  }));

});
