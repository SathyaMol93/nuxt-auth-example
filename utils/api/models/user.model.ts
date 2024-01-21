import type UserStatus from "~/utils/auth/enums/user-status.enum";
import type { Role } from "~/utils/auth/models/auth.model";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  status: UserStatus;
  created_date?: Date | null;
  updated_date?: Date | null;
  roleId: number;
  role: Role;
}

export interface UserDTO {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  status: UserStatus;
  created_date?: Date | null;
  updated_date?: Date | null;
  role: Role;
}
