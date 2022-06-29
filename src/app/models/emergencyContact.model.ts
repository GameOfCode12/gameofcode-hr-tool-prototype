import { Employee } from './employee.model';

export class EmergencyContact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  relationship?: string;
  employee: Employee;
}
