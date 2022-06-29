import { TestBed } from '@angular/core/testing';

import { SalarySlipsService } from './salary-slips.service';

describe('SalarySlipsService', () => {
  let service: SalarySlipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalarySlipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
