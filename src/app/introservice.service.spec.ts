import { TestBed } from '@angular/core/testing';

import { IntroserviceService } from './intro.service';

describe('IntroserviceService', () => {
  let service: IntroserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
