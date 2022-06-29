import { Employee } from 'src/app/models/employee.model';
import { Salary } from 'src/app/models/salary.model';
import { Project } from 'src/app/models/project.model';

export class SalaryBonus {
  id?: number;
  employee: Employee;
  bonusType: string;
  netBonus: number;
  amtInDollar: number;
  salary: Salary;
}
export class SalaryBonusHistory {
  id?: number;
  exEmployee: Employee;
  leftOn: string;
  team: Project;
  lastSalary: Salary;
}
