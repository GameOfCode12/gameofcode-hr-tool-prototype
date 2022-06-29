import { TestBed } from '@angular/core/testing';

import { SeniormanagementGuard } from './seniormanagement.guard';

describe('SeniormanagementGuard', () => {
  let guard: SeniormanagementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SeniormanagementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
