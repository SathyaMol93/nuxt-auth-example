import { PrismaClient } from "@prisma/client";
import HttpStatus from "~/utils/api/enums/Http-Status.enum";
import httpResponse, { ResponseEntity } from "~/utils/api/response-entity";
import {
  AuthConfigModel,
  LoginSessions,
  User,
} from "~/utils/auth/models/auth.model";
import { checkToken } from "~/utils/auth/token";

async function checkAuthentication(event): Promise<ResponseEntity> {
  const { client } = useRuntimeConfig().auth;
  const prisma = new PrismaClient();

  try {
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
    const authConfig: AuthConfigModel = await prisma.auth_config.findFirst({
      where: {
        client_id: client.id,
        client_secret: client.secret,
      },
    });

    if (authConfig !== null) {
      // Get token payload
      const decode = await checkToken(access_token, authConfig.token_secret);
      // Get user for token
      const user: User = await prisma.user.findUnique({
        where: {
          email: decode.email,
        },
        include: { role: true },
      });
      // Get login session for token
      const session: LoginSessions = await prisma.login_sessions.findUnique({
        where: {
          email: decode.email,
        },
      });

      if (
        decode !== null &&
        user != null &&
        access_token === session.access_token
      ) {
        return httpResponse(HttpStatus.OK, {}, "Token is valid");
      } else {
        return httpResponse(HttpStatus.UNAUTHORIZED, {}, "Invalid Token");
      }
    } else {
      return httpResponse(
        HttpStatus.UNAUTHORIZED,
        {},
        "Client is not authorized"
      );
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
  } finally {
    await prisma.$disconnect();
  }
}

export default checkAuthentication;
