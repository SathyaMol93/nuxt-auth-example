import { H3Event } from "h3";
import authnController from "../../controllers/auth.controller";

export default defineEventHandler(async (event:H3Event) => {
  return authnController(event);
});
