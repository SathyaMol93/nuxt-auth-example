import { H3Event } from "h3";
import HttpStatus from "~/utils/api/enums/Http-Status.enum";
import { User } from "~/utils/api/models/user.model";
import httpResponse from "~/utils/api/response-entity";
import { getUserByEmail } from "~/utils/api/user";
import { getAuthConfig } from "~/utils/auth/auth-config";
import { AuthConfigModel, LoginSessions } from "~/utils/auth/models/auth.model";
import { getSessionByEmail } from "~/utils/auth/session";
import { checkToken } from "~/utils/auth/token";

const { client } = useRuntimeConfig().auth;

export default defineEventHandler(async (event: H3Event) => {
  try {
    if (!event.node.req.url.includes("/auth")) {
      const bearer_token = await getHeader(event, "Authorization");

      // check header contains a valid token
      if (
        bearer_token === undefined ||
        bearer_token === "" ||
        !bearer_token.startsWith("Bearer ")
      ) {
        return httpResponse(HttpStatus.UNAUTHORIZED, {}, "Invalid Token");
      }

      //remove Bearer from token
      const access_token = bearer_token.substring(7);

      // fetch auth configuration
      const authConfig: AuthConfigModel | null = await getAuthConfig(
        client.id,
        client.secret
      );

      if (authConfig !== null) {
        // Get token payload
        const decode = await checkToken(access_token, authConfig.token_secret);
        // Get user for token
        const user: User | null = await getUserByEmail(decode.email);
        // Get login session for token
        const session: LoginSessions | null = await getSessionByEmail(
          decode.email
        );

        if (
          decode === null ||
          user === null ||
          access_token !== session?.access_token
        ) {
          return httpResponse(HttpStatus.UNAUTHORIZED, {}, "Invalid Token");
        }
      } else {
        return httpResponse(
          HttpStatus.UNAUTHORIZED,
          {},
          "Client is not authorized"
        );
      }
    }
  } catch (error: any) {
    console.error("Error during validation:", error);
    if (error.name === "TokenExpiredError") {
      // Handle token expiration error
      return httpResponse(HttpStatus.UNAUTHORIZED, {}, "Token expired");
    } else if (error.name === "JsonWebTokenError") {
      // Handle general JWT error
      return httpResponse(HttpStatus.UNAUTHORIZED, {}, "Invalid Token");
    } else {
      // Handle other errors
      console.error("Error during token verification:", error);
      return httpResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        {},
        "Internal Server Error"
      );
    }
  }
});
