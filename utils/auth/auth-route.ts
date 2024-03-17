import RoleName from "./enums/role-name.enum";

export interface AuthRoute {
  route: string;
  roles: RoleName[];
}

export const auth_routes: AuthRoute[] = [
  {
    route: "/getUsers",
    roles: [],
  },
];
