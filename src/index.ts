import dotenv from "dotenv";
import { startServer } from "./server";
import logger from "./utils/logger";
dotenv.config();

process.on("uncaughtException", (error: Error) => {
  logger.error("Uncaught Exception", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  logger.error("Unhandled Rejection", reason);
  process.exit(1);
});

async function start() {
  try {
    await startServer();
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
}

start();
