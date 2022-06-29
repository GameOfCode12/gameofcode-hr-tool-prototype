import { TestBed } from '@angular/core/testing';

import { EmployeesSkillsService } from './employees-skills.service';

describe('EmployeesSkillsService', () => {
  let service: EmployeesSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
