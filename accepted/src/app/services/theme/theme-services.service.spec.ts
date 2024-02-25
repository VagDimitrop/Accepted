import { TestBed } from '@angular/core/testing';

import { ThemeServicesService } from './theme-services.service';

describe('SharedServicesService', () => {
  let service: ThemeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
