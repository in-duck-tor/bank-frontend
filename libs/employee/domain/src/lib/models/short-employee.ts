export enum EmployeeStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export interface ShortEmployee {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  position?: string | null;
  blockedUntil?: string | null;
  inactiveSince?: string | null;
  status: EmployeeStatus;
}
