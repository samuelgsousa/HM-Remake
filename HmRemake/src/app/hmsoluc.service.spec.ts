import { TestBed } from '@angular/core/testing';

import { HmsolucService } from './hmsoluc.service';

describe('HmsolucService', () => {
  let service: HmsolucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmsolucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
