import { Employee } from './employee.model';

export class Conference {
  id?: number;
  employee: Employee;
  conferenceType: string;
  dateAttended: Date;
  conferenceName: string;
  assignedBy: Employee;
  certification:string;
}
