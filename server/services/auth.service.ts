import httpResponse, { ResponseEntity } from "~/utils/api/response-entity";
import HttpStatus from "~/utils/api/enums/Http-Status.enum";
import bcrypt from "bcrypt";
import { H3Event } from "h3";
import {
  AuthConfigModel,
  AuthPayload,
  AuthRequestModel,
  AuthResponse,
  LoginSessions,
  SignupRequestModel,
} from "~/utils/auth/models/auth.model";
import { checkToken, generateJWToken } from "~/utils/auth/token";
import { createOrUpdateSession, getSessionByEmail } from "~/utils/auth/session";
import { createUser, getUserByEmail } from "~/utils/api/user";
import { getAuthConfig } from "~/utils/auth/auth-config";
import UserStatus from "~/utils/auth/enums/user-status.enum";
import { User, UserDTO } from "~/utils/api/models/user.model";
const { client } = useRuntimeConfig().auth;

export async function login(event: H3Event): Promise<ResponseEntity> {
  const { password, email }: AuthRequestModel = await readBody(event);

  try {
    const authConfig: AuthConfigModel | null = await getAuthConfig(
      client.id,
      client.secret
    );

    if (authConfig !== null) {
      const user: User | null = await getUserByEmail(email);

      const isPasswordValid: boolean =
        user !== null ? await bcrypt.compare(password, user.password) : false;

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
        await createOrUpdateSession(email, accessToken, refreshToken);

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
  } catch (error: any) {
    console.error("Error during signin:", error);
    return httpResponse(HttpStatus.INTERNAL_SERVER_ERROR, {}, error.messages);
  }
}

export async function signup(event: H3Event): Promise<ResponseEntity> {
  const { password, email, firstName, lastName }: SignupRequestModel =
    await readBody(event);

  try {
    const authConfig: AuthConfigModel | null = await getAuthConfig(
      client.id,
      client.secret
    );

    if (authConfig !== null) {
      const hashedPassword: string = await bcrypt.hash(
        password,
        authConfig.password_salt
      );

      const exisitingUser: User | null = await getUserByEmail(email);

      // Check if the user email already exists
      if (exisitingUser !== null) {
        return httpResponse(HttpStatus.FORBIDDEN, {}, "Email already exists");
      }
      // Save the user data in your database
      const userData: User = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: hashedPassword, // Make sure to hash the password before saving it
        status: UserStatus.ACTIVE, // or 'INACTIVE' or 'DELETE'
        roleId: 1, // Any user who signup saved as a role Admin
      };

      // Save the user to the database
      await createUser(userData);
      // Assuming setResponseStatus is a function to set the response status

      return httpResponse(HttpStatus.OK, {}, "Signup successful");
    } else {
      return httpResponse(
        HttpStatus.UNAUTHORIZED,
        {},
        "Client is not authorized"
      );
    }
  } catch (error: any) {
    console.error("Error during signup:", error);
    return httpResponse(HttpStatus.INTERNAL_SERVER_ERROR, {}, error.messages);
  }
}

export async function refresh(event: H3Event): Promise<ResponseEntity> {
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
    const authConfig: AuthConfigModel | null = await getAuthConfig(
      client.id,
      client.secret
    );

    if (authConfig !== null) {
      // Get token payload
      const decode = await checkToken(
        refresh_token,
        authConfig.refresh_token_secret
      );
      // Get user for token
      const user: User | null = await getUserByEmail(decode.email);
      // Get login session for token
      const session: LoginSessions | null = await getSessionByEmail(
        decode.email
      );

      if (
        decode !== null &&
        user != null &&
        refresh_token === session?.refresh_token
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

        // Update the session
        await createOrUpdateSession(session.email, accessToken, refreshToken);

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
  }
}

export async function checkAuthentication(
  event: H3Event
): Promise<ResponseEntity> {
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
        decode !== null &&
        user != null &&
        access_token === session?.access_token
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
  }
}

export async function getAuthorizedUser(
  event: H3Event
): Promise<ResponseEntity> {
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
    const authConfig: AuthConfigModel | null = await getAuthConfig(
      client.id,
      client.secret
    );

    if (authConfig !== null) {
      // Get token payload
      const decode = await checkToken(refresh_token, authConfig.token_secret);
      // Get user for token
      const user: User | null = await getUserByEmail(decode.email);
      const userDTO: UserDTO | null =
        user != null
          ? {
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              status: user.status,
              created_date: user.created_date,
              updated_date: user.updated_date,
              role: user.role,
            }
          : null;

      return httpResponse(HttpStatus.OK, {}, userDTO);
    } else {
      return httpResponse(
        HttpStatus.UNAUTHORIZED,
        {},
        "Client is not authorized"
      );
    }
  } catch (error:any) {
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
}
