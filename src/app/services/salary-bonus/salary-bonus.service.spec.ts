import { TestBed } from '@angular/core/testing';

import { SalaryBonusService } from './salary-bonus.service';

describe('SalaryBonusService', () => {
  let service: SalaryBonusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryBonusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
