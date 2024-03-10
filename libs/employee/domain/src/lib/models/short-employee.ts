export enum EmployeeStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export interface ShortEmployee {
  id: number;
  login: string;
  email?: string | null;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  position: readonly string[];
  isBlocked: boolean;
  inactiveSince?: string | null;
  status: EmployeeStatus;
}
