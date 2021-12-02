import pino from "pino";

export const logger = pino({
  name: process.env["npm_package_name"],
  prettyPrint: {
    colorize: true,
    ignore: "hostname,pid",
    translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
  },
});
