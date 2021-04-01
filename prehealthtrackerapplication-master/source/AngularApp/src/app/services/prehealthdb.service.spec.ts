import { TestBed } from '@angular/core/testing';

import { PrehealthdbService } from './prehealthdb.service';

describe('PrehealthdbService', () => {
  let service: PrehealthdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrehealthdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
