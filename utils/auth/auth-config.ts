import { PrismaClient } from "@prisma/client";
import type { AuthConfigModel } from "./models/auth.model";

export async function getAuthConfig(clientId:string, clientSecret:string): Promise<AuthConfigModel| null> {
    const prisma = new PrismaClient();
    let authConfig: AuthConfigModel | null = null;
    try {
        authConfig = await prisma.auth_config.findFirst({
            where: {
              client_id: clientId,
              client_secret: clientSecret,
            },
          });
    } catch (error) {
       console.error(error); 
    }finally {
        await prisma.$disconnect();
    }
    return authConfig;
}