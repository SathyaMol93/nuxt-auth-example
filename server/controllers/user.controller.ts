import { H3Event } from "h3";
import { getActiveUsers } from "../services/user.service";

const router = createRouter();

router.get(
  "/getUsers",
  defineEventHandler(async (event: H3Event) => {
    return await getActiveUsers(event);
  })
);

export default useBase("/api/v1/user", router.handler);
