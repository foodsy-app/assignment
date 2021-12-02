import "make-promises-safe";
import fastify from "fastify";
import { prismaPlugin } from "./plugins/prisma";
import { userRoutes } from "./routes/user";
import { logger } from "./utilities/logger";

const server = fastify({ logger });

server.register(prismaPlugin);

server.register(userRoutes, { prefix: "/users" });

server.listen(4000, "0.0.0.0");
