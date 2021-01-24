import { TestBed } from '@angular/core/testing';

import { SchedulesStatusService } from './schedules-status.service';

describe('SchedulesStatusService', () => {
  let service: SchedulesStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulesStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
