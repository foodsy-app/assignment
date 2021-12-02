import type { FastifyPluginCallback } from "fastify";

export const userRoutes: FastifyPluginCallback = (server, _, done) => {
  /**
   * GET /users
   * All users.
   */
  server.get("/", async (_, reply) => {
    const users = await server.prisma.user.findMany();

    reply.send(users);
  });

  done();
};
