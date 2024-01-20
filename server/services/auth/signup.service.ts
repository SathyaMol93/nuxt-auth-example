import { ResponseEntity } from "~/utils/api/response-entity";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import HttpStatus from "~/utils/api/enums/Http-Status.enum";
import httpResponse from "~/utils/api/response-entity";
import UserStatus from "~/utils/auth/enums/user-status.enum";
import {
  AuthConfigModel,
  SignupRequestModel,
  User,
} from "~/utils/auth/models/auth.model";

async function signup(event): Promise<ResponseEntity> {
  const { client } = useRuntimeConfig().auth;
  const { password, email, firstName, lastName }: SignupRequestModel =
    await readBody(event);

  const prisma = new PrismaClient();

  try {
    const authConfig: AuthConfigModel = await prisma.auth_config.findFirst({
      where: {
        client_id: client.id,
        client_secret: client.secret,
      },
    });

    if (authConfig !== null) {
      const hashedPassword = await bcrypt.hash(password, authConfig.password_salt);

      const exisitingUser: User = await prisma.user.findUnique({
        where: {
          email: email,
        },
        include: {role:true}
      });

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
      await prisma.user.create({
        data: userData,
      });
      // Assuming setResponseStatus is a function to set the response status

      return httpResponse(HttpStatus.OK, {}, "Signup successful");
    } else {
      return httpResponse(HttpStatus.UNAUTHORIZED, {}, "Client is not authorized");
    }
  } catch (error: any) {
    console.error("Error during signup:", error);
    return httpResponse(HttpStatus.INTERNAL_SERVER_ERROR, {}, error.messages);
  } finally {
    await prisma.$disconnect();
  }
}

export default signup;
