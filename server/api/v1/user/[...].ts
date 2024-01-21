import { H3Event } from "h3";
import userController from "../../../controllers/user.controller";

export default defineEventHandler(async (event: H3Event) => {
  return userController(event);
});
