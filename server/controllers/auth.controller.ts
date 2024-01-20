import checkAuthentication from "../services/auth/check-authentication.service";
import login from "../services/auth/login.service";
import signup from "../services/auth/signup.service";

const router = createRouter();

// Log user in
router.post(
  "/login",
  defineEventHandler(async (event) => {
    return await login(event);
  })
);

// Register user
router.post(
  "/signup",
  defineEventHandler(async (event) => {
    return await signup(event);
  })
);

// Check if user is authenticated
router.get(
  "/isauthenticated",
  defineEventHandler(async (event) => {
    return await checkAuthentication(event);
  })
);
export default useBase("/auth", router.handler);
