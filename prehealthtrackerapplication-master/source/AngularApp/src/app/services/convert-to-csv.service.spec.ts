import { TestBed } from '@angular/core/testing';

import { ConvertToCsvService } from './convert-to-csv.service';

describe('ConvertToCSVService', () => {
  let service: ConvertToCsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertToCsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
