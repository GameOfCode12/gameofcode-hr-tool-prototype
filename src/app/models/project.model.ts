import { Employee } from './employee.model';

export class Project {
  id?: number;
  name: string;
  fte?: number;
  employees?: Employee[];
  manager?: Employee;
}
