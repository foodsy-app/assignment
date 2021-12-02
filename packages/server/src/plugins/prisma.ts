import fp from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export const prismaPlugin = fp(async (server) => {
  const prisma = new PrismaClient({ log: ["error", "warn"] });

  await prisma.$connect();

  server.decorate("prisma", prisma);

  server.addHook("onClose", async (server) => {
    server.log.info("disconnecting Prisma from database");
    await server.prisma.$disconnect();
  });
});
