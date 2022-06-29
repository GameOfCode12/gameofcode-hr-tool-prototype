import { Employee } from 'src/app/models/employee.model';

export class Skill {
  id?: number;
  level: number;
  skillname: string;
  employee: Employee;
  description: string;
}
