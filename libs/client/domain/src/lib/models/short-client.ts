export enum ClientStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export interface ShortClient {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  birthDate: string;
  blockedUntil?: string | null;
  inactiveSince?: string | null;
  status: ClientStatus;
}
