import { Conference } from '../models/conference.model';
import { EmergencyContact } from '../models/emergencyContact.model';
import { Employee } from '../models/employee.model';
import { NonWorkingHoliday } from '../models/nonWorkingHoliday.model';
import { Project } from '../models/project.model';
import { RolesGroup } from '../models/role.model';
import { Salary } from '../models/salary.model';
import { SalaryBonus } from '../models/salaryBonus.model';

export interface EmployeesState {
  employees: Employee[];
  managers: Employee[];
  roles: RolesGroup;
  conferences: Conference[];
  nonWorkingHolidays: NonWorkingHoliday[];
  projects: Project[];
  emergencyContacts: EmergencyContact[];
  pastEmployees: Employee[];
  salaries: Salary[];
  salaryBonuses: SalaryBonus[];
}
