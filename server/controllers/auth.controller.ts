import { H3Event } from "h3";
import {
  checkAuthentication,
  getAuthorizedUser,
  login,
  refresh,
  signup,
} from "../services/auth.service";

const router = createRouter();

// Log user in
router.post(
  "/login",
  defineEventHandler(async (event: H3Event) => {
    return await login(event);
  })
);

// Register user
router.post(
  "/signup",
  defineEventHandler(async (event: H3Event) => {
    return await signup(event);
  })
);

// Check if user is authenticated
router.post(
  "/isauthenticated",
  defineEventHandler(async (event: H3Event) => {
    return await checkAuthentication(event);
  })
);

// Token generation using the refresh token
router.post(
  "/refresh-token",
  defineEventHandler(async (event: H3Event) => {
    return await refresh(event);
  })
);

// Token generation using the refresh token
router.get(
  "/getAuthorizedUser",
  defineEventHandler(async (event: H3Event) => {
    return await getAuthorizedUser(event);
  })
);
export default useBase("/auth", router.handler);
