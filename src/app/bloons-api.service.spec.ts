import { TestBed } from '@angular/core/testing';

import { BloonsAPIService } from './bloons-api.service';

describe('BloonsAPIService', () => {
  let service: BloonsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloonsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
