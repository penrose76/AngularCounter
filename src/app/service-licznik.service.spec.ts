import { TestBed, inject } from '@angular/core/testing';

import { ServiceLicznikService } from './service-licznik.service';

describe('ServiceLicznikService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceLicznikService]
    });
  });

  it('should be created', inject([ServiceLicznikService], (service: ServiceLicznikService) => {
    expect(service).toBeTruthy();
  }));
});
