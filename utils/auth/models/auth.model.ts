import type RoleName from "../enums/role-name.enum";
import type RoleStatus from "../enums/role-status.enum";
import type UserStatus from "../enums/user-status.enum";

export interface AuthConfigModel {
  id?: number;
  client_id?: string | null;
  client_secret?: string | null;
  token_secret?: string | null;
  refresh_token_secret?: string | null;
  token_expires_in?: number;
  refresh_token_expires?: number;
  password_salt?: number;
  created_date?: Date | null;
  updated_date?: Date | null;
}

export interface AuthPayload {
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  role?: string | null;
}

export interface AuthRequestModel {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface Role {
  id: number;
  role_name: RoleName;
  status?: RoleStatus | null;
  created_date?: Date | null;
  updated_date?: Date | null;
  user: User[];
}

export interface SignupRequestModel extends AuthRequestModel {
  firstName: string;
  lastName: string;
}

export interface User {
  id: number;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  password?: string | null;
  status?: UserStatus | null;
  created_date?: Date | null;
  updated_date?: Date | null;
  roleId: number;
  role: Role;
}

export interface LoginSessions {
  id: number;
  email?: string | null;
  access_token?: string | null;
  refresh_token?: string | null;
  created_date?: Date | null;
  updated_date?: Date | null;
}
