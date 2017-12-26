import { TestBed, inject } from '@angular/core/testing';

import { ApiCoreServiceService } from './api-core-service.service';

describe('ApiCoreServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCoreServiceService]
    });
  });

  it('should be created', inject([ApiCoreServiceService], (service: ApiCoreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
