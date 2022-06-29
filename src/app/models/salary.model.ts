import { Employee } from './employee.model';
import { SalaryBonus } from './salaryBonus.model';

export class Salary {
  id?: number;
  employee?: Employee;
  contractExpiry?: Date;
  lastContractLength?: number;
  suggestedNewContractLength?: number;
  salaryBumpHistory: number;
  lastRaiseDate: Date;
  lastRaise: number;
  salary: number;
  suggestedRaise: number;
  final: number;
  amtInDollar?: number;
  comments?: string;
  created_at?: Date;
}
