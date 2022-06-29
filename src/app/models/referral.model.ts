import { Employee } from 'src/app/models/employee.model';

export class Referral {
  id?: number;
  firstName: string;
  lastName: string;
  employeeReferralId: number;
  employeeReferralFirstName?: string;
  employeeReferralLastName?: string;
  trialEnds: Date;
  bonusPaid: boolean;
  referralBonus: number;
  note: string;
}
