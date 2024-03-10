export enum ClientStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export interface ShortClient {
  id: number;
  login: string;
  email?: string | null;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  birthDate?: string | null;
  isBlocked: boolean;
  inactiveSince?: string | null;
  status: ClientStatus;
}
