import authnController from "../../controllers/auth.controller";

export default defineEventHandler(async (event) => {
  return authnController(event);
});
