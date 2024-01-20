import httpResponse, { ResponseEntity } from "~/utils/api/response-entity";
import { PrismaClient } from "@prisma/client";
import HttpStatus from "~/utils/api/enums/Http-Status.enum";
import bcrypt from "bcrypt";
import {
  AuthConfigModel,
  AuthPayload,
  AuthRequestModel,
  AuthResponse,
  LoginSessions,
  User,
} from "~/utils/auth/models/auth.model";
import { generateJWToken } from "~/utils/auth/token";

async function login(event): Promise<ResponseEntity> {
  const { client } = useRuntimeConfig().auth;
  const { password, email }: AuthRequestModel = await readBody(event);
  const prisma = new PrismaClient();

  try {
    const authConfig: AuthConfigModel = await prisma.auth_config.findFirst({
      where: {
        client_id: client.id,
        client_secret: client.secret,
      },
    });

    if (authConfig !== null) {
      const user: User = await prisma.user.findUnique({
        where: {
          email: email,
        },
        include: { role: true },
      });
      const isPasswordValid: boolean = await bcrypt.compare(
        password,
        user.password
      );
      // Check if the user email already exists
      if (user !== null && isPasswordValid) {
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

        // checking for login session details. If it is the first time it will create a new session and then login else will update the existing session
        const loginSession: LoginSessions =
          await prisma.login_sessions.findUnique({
            where: {
              email: email,
            },
          });
        if (loginSession != null) {
          await prisma.login_sessions.update({
            where: {
              id: loginSession.id,
              email: loginSession.email,
            },
            data: {
              access_token: accessToken,
              refresh_token: refreshToken,
            },
          });
        } else {
          await prisma.login_sessions.create({
            data: {
              email: email,
              access_token: accessToken,
              refresh_token: refreshToken,
            },
          });
        }
        const authResponse: AuthResponse = {
          accessToken: accessToken,
          refreshToken: refreshToken,
        };
        return httpResponse(HttpStatus.OK, {}, authResponse);
      } else {
        return httpResponse(HttpStatus.UNAUTHORIZED, {}, "Invalid Credentials");
      }
    } else {
      return httpResponse(
        HttpStatus.UNAUTHORIZED,
        {},
        "Client is not authorized"
      );
    }
  } catch (error) {
    console.error("Error during signin:", error);
    return httpResponse(HttpStatus.INTERNAL_SERVER_ERROR, {}, error.messages);
  } finally {
    await prisma.$disconnect();
  }
}

export default login;
