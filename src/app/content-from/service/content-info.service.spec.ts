import { TestBed, inject } from '@angular/core/testing';

import { ContentInfoService } from './content-info.service';

describe('ContentInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentInfoService]
    });
  });

  it('should be created', inject([ContentInfoService], (service: ContentInfoService) => {
    expect(service).toBeTruthy();
  }));
});
