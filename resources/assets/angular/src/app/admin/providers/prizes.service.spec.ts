import { TestBed, inject } from '@angular/core/testing';

import { PrizesService } from './prizes.service';

describe('PrizesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrizesService]
    });
  });

  it('should be created', inject([PrizesService], (service: PrizesService) => {
    expect(service).toBeTruthy();
  }));
});
