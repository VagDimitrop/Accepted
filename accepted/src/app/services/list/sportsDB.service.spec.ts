import { TestBed } from '@angular/core/testing';

import { SportsDBService } from './sportsDB.service';

describe('ListServicesService', () => {
  let service: SportsDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
