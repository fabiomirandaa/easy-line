import { TestBed } from '@angular/core/testing';

import { WaitLineService } from './wait-line.service';

describe('WaitLineService', () => {
  let service: WaitLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
