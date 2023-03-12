import { TestBed } from '@angular/core/testing';

import { MovementService } from '../movement.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('MovementService', () => {
  let service: MovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
