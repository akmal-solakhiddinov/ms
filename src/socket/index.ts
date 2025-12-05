import { Socket, Server } from "socket.io";
import logger from "../utils/logger";

export function initializeSocketHandlers(io: Server) {
  logger.info("Initializing Socket.IO handlers...");

  io.on("connnection", (socket: Socket) => {
    logger.info(`Client connected: [${socket.id}]`);
  });
}
