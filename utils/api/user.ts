import { PrismaClient } from "@prisma/client";
import type { User } from "../auth/models/auth.model";
import UserStatus from "../auth/enums/user-status.enum";

export async function createUser(user: User): Promise<User> {
  const prisma = new PrismaClient();
  try {
    await prisma.user.create({
      data: user,
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
  return user;
}

export async function updateUser(user: User): Promise<User> {
  const prisma = new PrismaClient();
  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
  return user;
}

export async function getUserByEmail(email: string): Promise<User| null> {
  const prisma = new PrismaClient();
  let user: User | null = null;
  try {
    user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: { role: true },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
  return user;
}

export async function getUsers(): Promise<User[]> {
  const prisma = new PrismaClient();
  let users: User[]  = [];
  try {
    users = await prisma.user.findMany({
      where: {
        status: UserStatus.ACTIVE
      },
      include: { role: true },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
  return users;
}