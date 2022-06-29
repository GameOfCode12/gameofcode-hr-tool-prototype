export class Role {
  id?: number;
  name: string;
  description: string;
  type: string;
}

export class RolesGroup {
  roles: Role[];
}
