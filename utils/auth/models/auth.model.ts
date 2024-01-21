import type { User } from "~/utils/api/models/user.model";
import type RoleName from "../enums/role-name.enum";
import type RoleStatus from "../enums/role-status.enum";

export interface AuthConfigModel {
  id: number;
  client_id: string;
  client_secret: string;
  token_secret: string;
  refresh_token_secret: string;
  token_expires_in: number;
  refresh_token_expires: number;
  password_salt: number;
  created_date?: Date | null;
  updated_date?: Date | null;
}

export interface AuthPayload {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
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
  status: RoleStatus;
  created_date?: Date | null;
  updated_date?: Date | null;
  user: User[];
}

export interface SignupRequestModel extends AuthRequestModel {
  firstName: string;
  lastName: string;
}

export interface LoginSessions {
  id: number;
  email: string;
  access_token: string;
  refresh_token: string;
  created_date?: Date | null;
  updated_date?: Date | null;
}
