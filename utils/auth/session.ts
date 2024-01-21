import { PrismaClient } from "@prisma/client";
import type { LoginSessions } from "./models/auth.model";

export async function createOrUpdateSession(
  email: string,
  accessToken: string,
  refreshToken: string
): Promise<void> {
  const prisma = new PrismaClient();
  try {
    const loginSession: LoginSessions = await prisma.login_sessions.findUnique({
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
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getSessionByEmail(email: string): Promise<LoginSessions | null> {
  const prisma = new PrismaClient();
  let session: LoginSessions | null = null;
  try {
    session = await prisma.login_sessions.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }

  return session;
}
