import { TestBed, inject } from '@angular/core/testing';

import { ContentChangeService } from './content-change.service';

describe('ContentChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentChangeService]
    });
  });

  it('should be created', inject([ContentChangeService], (service: ContentChangeService) => {
    expect(service).toBeTruthy();
  }));
});
