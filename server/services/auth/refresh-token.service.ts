import { PrismaClient } from "@prisma/client";
import HttpStatus from "~/utils/api/enums/Http-Status.enum";
import httpResponse, { ResponseEntity } from "~/utils/api/response-entity";
import {
  AuthConfigModel,
  LoginSessions,
  User,
} from "~/utils/auth/models/auth.model";
import { checkToken } from "~/utils/auth/token";
import { generateJWToken } from "../../../utils/auth/token";
import { AuthResponse } from "../../../utils/auth/models/auth.model";

async function tokenGenerateForRefreshToken(event): Promise<ResponseEntity> {
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
      return httpResponse(HttpStatus.UNAUTHORIZED, {}, "Invalid Refresh Token");
    }

    //remove Bearer from token
    const refresh_token = bearer_token.substring(7);

    // fetch auth configuration
    const authConfig: AuthConfigModel = await prisma.auth_config.findFirst({
      where: {
        client_id: client.id,
        client_secret: client.secret,
      },
    });

    if (authConfig !== null) {
      // Get token payload
      const decode = await checkToken(refresh_token, authConfig.refresh_token_secret);
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
        refresh_token === session.refresh_token
      ) {
        // Prepare token payload. you can add any information you need in to this payload
        const tokenpayload: AuthPayload = {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          role: user.role.role_name,
        };

        const accessToken = await generateJWToken(
          tokenpayload,
          authConfig.token_secret,
          authConfig.token_expires_in
        );
        const refreshToken = await generateJWToken(
          tokenpayload,
          authConfig.refresh_token_secret,
          authConfig.refresh_token_expires
        );

        await prisma.login_sessions.update({
          where: {
            id: session.id,
            email: session.email,
          },
          data: {
            access_token: accessToken,
            refresh_token: refreshToken,
          },
        });

        const authResponse: AuthResponse = {
          accessToken: accessToken,
          refreshToken: refreshToken,
        };
        return httpResponse(HttpStatus.OK, {}, authResponse);
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

export default tokenGenerateForRefreshToken;
