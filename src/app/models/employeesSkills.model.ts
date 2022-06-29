import { Employee } from './employee.model';

export class EmployeesSkills {
  id?: number;
  skillName: string;
  level: number;
  employees?: Employee[];
}
