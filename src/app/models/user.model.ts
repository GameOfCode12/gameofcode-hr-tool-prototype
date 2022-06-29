import { Employee } from './employee.model';
import { Role } from './role.model';

export class User {
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role;
  employee?: Employee;
}

export class UserLogin {
  username: string;
  password: string;
}
